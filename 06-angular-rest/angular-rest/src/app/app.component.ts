import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "util";
import { FILAS } from './constantes/numero-filas-por-tabla';
import {MatDialog} from "@angular/material/dialog";
import {ModalEditarUsuarioComponent} from "./modales/modal-editar-usuario/modal-editar-usuario.component";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-rest';
  url = 'http://localhost:1337'; //sails
  usuarios = [];
  FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';

  //Inyeccion de dependencias
  //En angular las dependencias son servicios
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _usuarioRestService: UsuarioRestService
  ){
    //CASI NUNCA HACER CONFIGURACIONES
  }

  ngOnInit(): void {

    const urlUsuarios = this.url + '/usuario'; //sails
    // $ -> Observable

    const usuarios$ = this._httpClient.get(
      urlUsuarios
    );

    usuarios$
      .subscribe(
        (usuarios: any[])=>{ //TRY
          console.log('Usuarios: ', usuarios);
          this.usuarios = usuarios
        },
        (error)=>{ // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando usuarios'
          })
        }


      );

  }
  editar(usuario){
    console.log('Editando usuario', usuario);
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {
          width: '500px',
          data:{
            usuario,
          }
        }
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario
      .afterClosed();
    respuestaDialogo$
      .subscribe(
        (datos)=>{ //try
          console.log('Datos', datos);
          if(datos){
            this.editarUsuarioHTTP(usuario.id, datos)
          }else{
            //undefined
          }
        },
        (error)=>{ //catch
          console.log('Error', error);
        }
      );
  }

  editarUsuarioHTTP(id: number, datos) {
    const usuarioEditado$ = this._usuarioRestService
      .editar(id, datos);
    usuarioEditado$
      .subscribe(
        (usuarioEditado: any) => { //try
          console.log(usuarioEditado);
          const indice = this.usuarios
            .findIndex(
            (usuario)=>{
              return usuario.id === id;
            }
          );
          this.usuarios[indice].nombre = datos.nombre;
          this.usuarios[indice].apellido = datos.apellido;
          this.usuarios[indice].correo = datos.correo;
          this.usuarios[indice].password = datos.password;
        },
        (error) => { //catch
          console.error(error)
        }
      )
  }


  eliminar(usuario){
    console.log('Eliminando usuario', usuario);
  }

  usuariosFiltrados(){

    return this.usuarios.filter(
      (usuario) => {
        /*const noHaFiltradoNombre = this.nombreFiltrado === '';
        if(noHaFiltradoNombre){
          return true;
        }else{
          return usuario.nombre.includes(this.nombreFiltrado);
        }

*/


          return usuario.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());

      }
    ).filter(
      (usuario) => {

        return usuario.apellido.toLowerCase().includes(this.apellidoFiltrado.toLowerCase());

      },

    ).filter(
      (usuario) => {

        return usuario.correo.toLowerCase().includes(this.correoFiltrado.toLowerCase());

      },
    );



  }

  usuariosFiltradosApellido(){

    return this.usuarios.filter(
      (usuario) => {
        /*const noHaFiltradoNombre = this.nombreFiltrado === '';
        if(noHaFiltradoNombre){
          return true;
        }else{
          return usuario.nombre.includes(this.nombreFiltrado);
        }
  */

        return usuario.apellido.includes(this.apellidoFiltrado);

      },


    );


  }

  usuariosFiltradosCorreo(){

    return this.usuarios.filter(
      (usuario) => {
        /*const noHaFiltradoNombre = this.nombreFiltrado === '';
        if(noHaFiltradoNombre){
          return true;
        }else{
          return usuario.nombre.includes(this.nombreFiltrado);
        }
  */

        return usuario.correo.includes(this.correoFiltrado);

      },


    );
  }

}

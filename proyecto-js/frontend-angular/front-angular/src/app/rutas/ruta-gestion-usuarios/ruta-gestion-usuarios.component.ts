import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tabla';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioRestService} from "../../services/rest/usuario-rest.service";
import {ModalEditarUsuarioComponent} from "../../modales/modal-editar-usuario/modal-editar-usuario.component";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  title = 'angular-rest';
  url = 'http://localhost:1337'; //sails
  usuarios = [];
  FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  cedulaFiltrado = '';
  telefonoFiltrado = '';
  busquedaUsuario = '';

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
          this.usuarios[indice].numCedula = datos.numCedula;
          this.usuarios[indice].telefono = datos.telefono;
          this.usuarios[indice].correo = datos.correo;
          this.usuarios[indice].password = datos.password;
          this.usuarios[indice].rol = datos.rol;

        },
        (error) => { //catch
          console.error(error)
        }
      )
  }

  buscar(){
    const busqueda$ = this._usuarioRestService
      .buscar(this.busquedaUsuario);
    busqueda$
      .subscribe(
        (usuarios)=>{ //try
          this.usuarios = usuarios;
        },
        (error)=>{ //catch
          console.error(error)
        }
      )
  }



  eliminar(usuario){
    const eliminar$ = this._usuarioRestService
      .eliminar(usuario.id);
    eliminar$
      .subscribe(
        (usuarioEliminado) => {
          alert(`Se ha elminado con exito el usuario`);
          console.log('Se elimino:', usuarioEliminado);
          const indice = this.usuarios
            .findIndex(
              (usuarioBuscado) => {
                return usuarioBuscado.id === usuario.id;
              }
            );
          this.usuarios.splice(indice,1);
        },
        (error) => {
          console.log('Error', error);
        }
      )

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

        return usuario.numCedula.includes(this.cedulaFiltrado);

      },
    ).filter(
      (usuario) => {

        return usuario.telefono.includes(this.telefonoFiltrado);

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






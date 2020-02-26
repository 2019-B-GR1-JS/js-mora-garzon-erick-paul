import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {PacienteRestService} from "../../services/paciente-rest.service";
import {UsuarioRestService} from "../../services/usuario-rest.service";
import {Router} from "@angular/router";
import {ModalEditarPacienteComponent} from "../../modales/modal-editar-paciente/modal-editar-paciente.component";
import {ModalEditarUsuarioComponent} from "../../modales/modal-editar-usuario/modal-editar-usuario.component";

@Component({
  selector: 'app-ruta-paciente',
  templateUrl: './ruta-paciente.component.html',
  styleUrls: ['./ruta-paciente.component.scss']
})
export class RutaPacienteComponent implements OnInit {

  url = 'http://localhost:1337';
  filas = 1;
  busquedaPaciente = '';
  pacientes = [];
  usuarios = [];
  busquedaApellido = '';
  nombreFiltrado = '';
  apellidoFiltrado = '';
  fechaFiltrado = '';
  hijosFiltrado = '';

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _pacienteRestService: PacienteRestService,
    private readonly __matDialog: MatDialog,
    private readonly _usuarioRestService: UsuarioRestService,
    private readonly  _router: Router,
  ) { }

  ngOnInit() {
    this.consultarPacientes();
    this.consultarUsuarios();
  }
  consultarPacientes() {
    const urlUsuario = this.url + '/usuario';
    const paciente$ = this._httpClient
      .get(urlUsuario);
    paciente$
      .subscribe(
        (usuarios: any[]) => {
          this.usuarios = usuarios;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando usuario',
          });
        }
      );
  }

  consultarUsuarios() {
    const urlPaciente = this.url + '/paciente';
    const paciente$ = this._httpClient
      .get(urlPaciente);
    paciente$
      .subscribe(
        (pacientes: any[]) => {
          this.pacientes = pacientes;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando paciente',
          });
        }
      );
  }
  ingresar() {
    const matDialogRefModalIngresarPaciente =  this.__matDialog
      .open(
        ModalEditarPacienteComponent,
        {width: '500px',
        }
      );
    const respuestaDialog$ = matDialogRefModalIngresarPaciente
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datos) => {
          if (datos) {
            this.ingresarPacienteHttp(datos);
          } else {
            // undefined
          }
        },
        () => {}
      );
  }
  ingresarPacienteHttp(datos) {
    const pacienteIngresadoS = this._pacienteRestService
      .ingresar(datos);
    pacienteIngresadoS
      .subscribe(
        (pacienteIngresado) => {
          this.pacientes.push(pacienteIngresado);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  eliminar(paciente) {
    const eliminar$ = this._pacienteRestService
      .eliminar(paciente.id);
    eliminar$
      .subscribe(
        (pacienteEliminado) => {
          const indice = this.pacientes
            .findIndex(
              (pacienteBuscado) => {
                return pacienteBuscado.id === pacienteEliminado.id;
              }
            );
          this.pacientes.splice(indice, 1);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  buscar() {
    const busqueda$ = this._pacienteRestService
      .buscar(this.busquedaPaciente);
    busqueda$
      .subscribe(
        (pacientesEncontrados) => {
          this.pacientes = pacientesEncontrados;
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  editar(paciente) {
    console.log('Datos del paciente: ', paciente);
    const matDialogRefModalEditarPaciente = this.__matDialog
      .open(
        ModalEditarPacienteComponent,
        {width: '500', data: {paciente: paciente}}
      );
    const respuestaDialog$ = matDialogRefModalEditarPaciente
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datosEditados) => {
          console.log('Estos son los datos editados: ', datosEditados);
          if (datosEditados) {
            this.editarPacienteHttp(paciente.id, datosEditados);
          } else {
            // undefined
          }
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  editarPacienteHttp(id, datosEditar) {
    const pacienteEditado$ = this._pacienteRestService
      .editar(id, datosEditar);
    pacienteEditado$
      .subscribe(
        (pacienteEdit: any) => {
          console.log('Paciente editado: ', pacienteEdit);
          const indice = this.pacientes
            .findIndex(
              (paciente) => {
                return paciente.id === id;
              }
            );
          this.pacientes[indice].nombre = datosEditar.nombre;
          this.pacientes[indice].apellido = datosEditar.apellido;
          this.pacientes[indice].fechaNacimiento = datosEditar.fechaNacimiento;
          this.pacientes[indice].numeroHijos = datosEditar.numeroHijos;
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  buscarApellido() {
    const busqueda$ = this._usuarioRestService
      .buscar(this.busquedaApellido);
    busqueda$
      .subscribe(
        (usuariosEncontrados) => {
          this.usuarios = usuariosEncontrados;
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  eliminarU(usuario) {
    const eliminar$ = this._usuarioRestService
      .eliminar(usuario.id);
    eliminar$
      .subscribe(
        (usuarioEliminado) => {
          const indice = this.usuarios
            .findIndex(
              (usuarioBuscado) => {
                return usuarioBuscado.id === usuarioEliminado.id;
              }
            );
          this.usuarios.splice(indice, 1);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );

  }
  editarU(usuario) {
    console.log('Estos datos se recibe del paciente: ', usuario);
    const matDialogRefModalEditarUsuario = this.__matDialog
      .open(
        ModalEditarUsuarioComponent,
        {width: '500', data: {usuario}}
      );
    const respuestaDialog$ = matDialogRefModalEditarUsuario
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datosEditados) => {
          console.log('Estos son los datos editados: ', datosEditados);
          if (datosEditados) {
            this.editarUsuarioHttp(usuario.id, datosEditados);
          } else {
            // undefined
          }
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  salir() {
    this._router.navigate(['/login']);
  }
  editarUsuarioHttp(id, datosEditar) {
    const usuarioEditado$ = this._usuarioRestService
      .editar(id, datosEditar);
    usuarioEditado$
      .subscribe(
        (usuarioEdit: any) => {
          console.log('Usuario editado: ', usuarioEdit);
          const indice = this.usuarios
            .findIndex(
              (usuario) => {
                return usuario.id === id;
              }
            );
          this.usuarios[indice].nombre = datosEditar.nombre;
          this.usuarios[indice].apellido = datosEditar.apellido;
          this.usuarios[indice].correo = datosEditar.correo;
          this.usuarios[indice].rol = datosEditar.rol;

        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }

  pacientesFiltrados(){

    return this.pacientes.filter(
      (paciente) => {
        /*const noHaFiltradoNombre = this.nombreFiltrado === '';
        if(noHaFiltradoNombre){
          return true;
        }else{
          return usuario.nombre.includes(this.nombreFiltrado);
        }

*/


        return paciente.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());

      }
    ).filter(
      (paciente) => {

        return paciente.apellido.toLowerCase().includes(this.apellidoFiltrado.toLowerCase());

      },

    ).filter(
      (paciente) => {

        return paciente.fechaNacimiento.includes(this.fechaFiltrado);

      },
    ).filter(
      (paciente) => {

        return paciente.numeroHijos.includes(this.hijosFiltrado);

      },
    );



  }

}



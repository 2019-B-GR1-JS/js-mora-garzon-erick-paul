import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../interfaces/usuario";
import {UsuarioRestService} from "../../services/rest/usuario-rest.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.scss']
})
export class RutaEditarUsuarioComponent implements OnInit {

  usuarioAActualizar: Usuario;

  constructor(private readonly _usuarioRestService: UsuarioRestService,
              private readonly _router: Router,
              private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarUsuario) => {
          const usuario$ = this._usuarioRestService
            .findOneById(parametros.idUsuario);

          usuario$
            .subscribe(
              (usuario: Usuario) => {
                this.usuarioAActualizar = usuario;
              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );

  }

  actualizarUsuario(usuarioActualizado) {

    usuarioActualizado.id = this.usuarioAActualizar.id;

    const usuarioActualizada$ = this._usuarioRestService
      .updateOneById(usuarioActualizado);

    usuarioActualizada$
      .subscribe(
        (usuarioActualizada: Usuario) => {

          const url = [
            '/menu/gestion-usuarios'
          ];

          alert('Usuario actualizado ' + usuarioActualizada.nombre);

          this._router.navigate(url);
        },
        (error) => {
          alert('Ya existe un usuario con el correo electrónico ingresado');
          console.error('Error', error);
        }
      );
  }

}

interface ParametrosRutaActualizarUsuario {
  idUsuario: string;
}

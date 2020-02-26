import { Component, OnInit } from '@angular/core';
import {UsuarioRestService} from "../../services/rest/usuario-rest.service";
import {Usuario} from "../../interfaces/usuario";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-usuario',
  templateUrl: './ruta-crear-usuario.component.html',
  styleUrls: ['./ruta-crear-usuario.component.scss']
})
export class RutaCrearUsuarioComponent implements OnInit {

  constructor(
    private readonly _usuarioRestService: UsuarioRestService,
  private readonly _router: Router,
  private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  crearUsuario(usuarioObjeto) {

    const crearUsuario$ = this._usuarioRestService
      .create(
        usuarioObjeto.nombre,
        usuarioObjeto.apellido,
        usuarioObjeto.numCedula,
        usuarioObjeto.telefono,
        usuarioObjeto.correo,
        usuarioObjeto.password
      );

    crearUsuario$
      .subscribe(
        (usuario: Usuario) => {
          const url = [
            '/menu/gestion-usuarios'
          ];

          console.log('Usuario');
          alert(`Usuario creado: ${usuario.nombre}`);

          this._router.navigate(url);

        },
        (error) => {
          alert(`Ya existe un usuario registrado con ese correo electrónico`);
          console.error('Error: ', error);
        }
      );


  }

}

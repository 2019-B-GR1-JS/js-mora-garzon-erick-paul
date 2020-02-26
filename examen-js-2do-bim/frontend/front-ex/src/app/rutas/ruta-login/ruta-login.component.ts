import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ModalRegistrarUsuarioComponent} from "../../modales/modal-registrar-usuario/modal-registrar-usuario.component";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  url = environment.url;
  correo = '';
  password = '';

  constructor(
    private readonly _authService: AuthService,
    private readonly _matDialog: MatDialog,
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    const respuestaLogin$ = this._authService.login(this.correo, this.password);
    respuestaLogin$
      .subscribe(
        (datos: any[]) => {
          if (datos.length > 0) {
            console.log('Login exitoso');
            this._authService.estaLogueado = true;
            this._authService.sesion = datos[0]; // tenemos gardado el usuario
            if (this._authService.sesion.rol === 'usuario') {
              alert('Bienvenido ' + this.correo);
              this._router.navigate(['/usuario']);
            } else {
              alert('Bienvenido ' + this.correo);
              this._router.navigate(['/paciente']);
            }
          } else {
            console.log('No existe el usuario');
          }
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }
  registrar() {
    const matDialogRefModalRegistrarUsuario = this._matDialog
      .open(
        ModalRegistrarUsuarioComponent,
        {width: '450px'}
      );

  }

  registrarUsuarioHttp(usuario) {

  }

}


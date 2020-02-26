import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioRestService} from "../../services/rest/usuario-rest.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  usuario= {
    correo: '',
    password: '',
  };

  @Input()
  rol;

  constructor(
    private readonly _authService: AuthService,
    private readonly _usuarioRestService: UsuarioRestService,
    private readonly _router: Router
  ) { }

  ngOnInit() {

  }

/*
  login() {
    const respuestaLogin$ = this._authService
      .login(
        this.usuario.correo,
        this.usuario.password
      );

    respuestaLogin$
      .subscribe(
        (usuario) => {
          this._authService.usuario = usuario;
          this._authService.usuario.rol=usuario.rol;
          this.rol=usuario.rol;
          console.log(usuario);
          console.log(usuario.rol);
          console.log(this.rol);
          if(this.rol=='Administrador') {
            const url = [
              '/login',
              'menu-admin'
            ];
            alert('Bienvenido ' + usuario.correo);
            this._router.navigate(url);
          }else{
            const url = [
              '/login',
              'menu-usuario'
            ];
            alert('Bienvenido ' + usuario.correo);
            this._router.navigate(url);
          }
        },
        (error) => {
          console.error("ERROOOOR",error);
          alert('Correo y Password  incorrectos');
        }
      );
  }
*/
  isAdmin():boolean{
    return this.rol==='Administrador';
  }
}

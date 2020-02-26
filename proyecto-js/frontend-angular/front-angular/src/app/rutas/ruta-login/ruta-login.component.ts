import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {UsuarioRestService} from "../../services/rest/usuario-rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  correo = '';
  password = '';


  constructor(private readonly _authService:AuthService,
              private readonly _usuarioRestService: UsuarioRestService,
              private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    const respuestaLogin$ = this._authService.login(this.correo,this.password);
    respuestaLogin$
      .subscribe(
        (datos: any[])=>{
          if(datos.length > 0){
            console.log('Login exitoso');
            this._authService.estaLogeado = true;
            this._authService.sesion = datos[0];
            const url = [
              '/menu'//,
              //'gestion'
            ];
            alert('Bienvenido ' + this.correo);
            this._router.navigate(url);
          }else {
            console.log('No existe el usuario');
            alert('Correo y/o Password incorrectos');
          }
        },
        error => {
          console.error(error)
        }
      )
  }

}

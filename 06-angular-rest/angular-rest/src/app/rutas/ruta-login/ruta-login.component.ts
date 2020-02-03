import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  correo = '';
  password = '';


  constructor(private readonly _authService:AuthService) { }

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
          }else {
            console.log('No existe el usuario');
          }
        },
        error => {
          console.error(error)
        }
      )
  }

}

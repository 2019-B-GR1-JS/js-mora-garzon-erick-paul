import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-rest';
  url = 'http://localhost:1337'; //sails
  usuarios = [];
  //Inyeccion de dependencias
  //En angular las dependencias son servicios
  constructor(
    private readonly _httpClient: HttpClient
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
  }

  eliminar(usuario){
    console.log('Eliminando usuario', usuario);
  }
}

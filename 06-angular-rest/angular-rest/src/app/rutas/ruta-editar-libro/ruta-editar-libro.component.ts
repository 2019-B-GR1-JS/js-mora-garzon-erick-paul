import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-libro',
  templateUrl: './ruta-editar-libro.component.html',
  styleUrls: ['./ruta-editar-libro.component.scss']
})
export class RutaEditarLibroComponent implements OnInit {

  parametrosEditar;
  parametrosPapa;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() { //esta listo el componente se ejecuta este codigo
    //this.escucharParametrosEdicion();
    this.escucharParametrosPapa();
  }

  escucharParametrosEdicion(){
    const parametros$ = this._activatedRoute.params;
    parametros$
      .subscribe(
        (parametros)=>{
          this.parametrosEditar = parametros.idLibro;
          console.log('Parametros edicion: ',parametros);

        }
      );
  }

  escucharParametrosPapa(){
    const parametros$ = this._activatedRoute.parent.params;
    parametros$
      .subscribe(
        (parametros)=>{
          this.parametrosPapa = parametros.idUsuario;
          this.escucharParametrosEdicion();
          console.log('Parametros papa: ', parametros);

        }
      );
  }

  cargarUsuarioYLibro(){
    console.log(this.parametrosPapa);
    console.log(this.parametrosEditar);
  }

}

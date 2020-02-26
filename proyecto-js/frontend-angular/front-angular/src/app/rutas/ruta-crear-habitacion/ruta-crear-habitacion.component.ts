import { Component, OnInit } from '@angular/core';
import {HabitacionRestService} from "../../services/rest/habitacion-rest.service";
import {Habitacion} from "../../interfaces/habitacion";
import {ActivatedRoute, Router} from "@angular/router";
import {Piso} from "../../interfaces/piso";
import {PisoRestService} from "../../services/rest/piso-rest.service";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-ruta-crear-habitacion',
  templateUrl: './ruta-crear-habitacion.component.html',
  styleUrls: ['./ruta-crear-habitacion.component.scss']
})
export class RutaCrearHabitacionComponent implements OnInit {

  piso: Piso;
  habitaciones =[];

  constructor(private readonly _habitacionRestService: HabitacionRestService,
              private readonly _router: Router,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _pisoRestService: PisoRestService,
              private readonly _authService: AuthService,

              ) { }

  ngOnInit() {

    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$.subscribe(parametros => {
      const pisoEncontrada = this._pisoRestService.findOneById(
        +parametros.idPiso
      );
      console.log('paraid:', parametros.idPiso);
      pisoEncontrada.subscribe(
        piso => {
          this._pisoRestService.piso = piso;
          console.log('this.piso:', this._pisoRestService.piso);
          const habitaciones$ = this._habitacionRestService.findAllByPiso(this._pisoRestService.piso.id);
          habitaciones$.subscribe(
            (habitacions: Habitacion[])=>{

              this.habitaciones = habitacions;
              console.log('piso id: ', this.piso.id);
              console.log('Habitaciones: ', this.habitaciones);
            }, (error)=>{
              console.error(
                {
                  error: error,
                  mensaje: 'Error consultando habitaciones'
                }
              );
            }
          )
        },
        error => {
          console.error(error);
        }
      );
    });


  }


  crearHabitacion(habitacionObjeto) {

    const crearHabitacion$ = this._habitacionRestService
      .create(
        habitacionObjeto.numHabitacion,
        habitacionObjeto.estado,
        habitacionObjeto.tipoHabitacion,
        habitacionObjeto.idTipoHabitacion,
        //habitacionObjeto.idPiso
        this._pisoRestService.piso.id
      );

    crearHabitacion$
      .subscribe(
        (habitacion: Habitacion) => {
          const url = [
            '/menu/gestion-pisos/:idPiso/gestion-habitaciones'
          ];
          console.log('url', url);
          console.log('Piso', this._pisoRestService.piso.id);
          console.log('Habitacion', habitacion);
          alert(`Habitacion creada: ${habitacion.numHabitacion}`);
          this._router.navigate(url);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );


  }


}



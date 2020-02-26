import { Component, OnInit } from '@angular/core';
import {HabitacionRestService} from "../../services/rest/habitacion-rest.service";
import {Habitacion} from "../../interfaces/habitacion";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../interfaces/usuario";

@Component({
  selector: 'app-ruta-editar-habitacion',
  templateUrl: './ruta-editar-habitacion.component.html',
  styleUrls: ['./ruta-editar-habitacion.component.scss']
})
export class RutaEditarHabitacionComponent implements OnInit {

  habitacionAActualizar: Habitacion;

  constructor(private readonly _habitacionRestService: HabitacionRestService,
              private readonly _router: Router,
              private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarHabitacion) => {
          const habitacion$ = this._habitacionRestService
            .findOneById(parametros.idHabitacion);

          habitacion$
            .subscribe(
              (habitacion: Habitacion) => {
                this.habitacionAActualizar = habitacion;
              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );

  }

  actualizarHabitacion(habitacionActualizado) {

    habitacionActualizado.id = this.habitacionAActualizar.id;

    const habitacionActualizada$ = this._habitacionRestService
      .updateOneById(habitacionActualizado);

    habitacionActualizada$
      .subscribe(
        (habitacionActualizada: Habitacion) => {

          const url = [
            '/menu/gestion-pisos/:idPiso/gestion-habitaciones'
          ];

          alert('Habitacion actualizada ' + habitacionActualizada.numHabitacion);

          this._router.navigate(url);
        },
        (error) => {
          alert('Ya existe una habitacion con el numero ingresado');
          console.error('Error', error);
        }
      );
  }

}

interface ParametrosRutaActualizarHabitacion {
  idHabitacion: string;
}

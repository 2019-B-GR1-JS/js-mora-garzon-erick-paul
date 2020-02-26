import { Component, OnInit } from '@angular/core';
import {HabitacionRestService} from "../../services/rest/habitacion-rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Luz} from "../../interfaces/luz";
import {LuzRestService} from "../../services/rest/luz-rest.service";

@Component({
  selector: 'app-ruta-editar-luz',
  templateUrl: './ruta-editar-luz.component.html',
  styleUrls: ['./ruta-editar-luz.component.scss']
})
export class RutaEditarLuzComponent implements OnInit {

  luzAActualizar: Luz;

  constructor(private readonly _luzRestService: LuzRestService,
              private readonly _router: Router,
              private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarLuz) => {
          const luz$ = this._luzRestService
            .findOneById(parametros.idLuz);

          luz$
            .subscribe(
              (luz: Luz) => {
                this.luzAActualizar = luz;
              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );

  }

  actualizarLuz(luzActualizado) {

    luzActualizado.id = this.luzAActualizar.id;

    const luzActualizada$ = this._luzRestService
      .updateOneById(luzActualizado);

    luzActualizada$
      .subscribe(
        (luzActualizada: Luz) => {

          const url = [
            '/menu/gestion-habitaciones/:idHabitacion/gestion-luces'
          ];

          alert('Luz actualizada ' + luzActualizada.numLuz);

          this._router.navigate(url);
        },
        (error) => {
          alert('Ya existe una luz con el numero ingresado');
          console.error('Error', error);
        }
      );
  }

}

interface ParametrosRutaActualizarLuz {
  idLuz: string;
}


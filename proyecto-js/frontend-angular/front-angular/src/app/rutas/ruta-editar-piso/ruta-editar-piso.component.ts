import { Component, OnInit } from '@angular/core';
import {Piso} from "../../interfaces/piso";
import {PisoRestService} from "../../services/rest/piso-rest.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-piso',
  templateUrl: './ruta-editar-piso.component.html',
  styleUrls: ['./ruta-editar-piso.component.scss']
})
export class RutaEditarPisoComponent implements OnInit {
  
  pisoAActualizar: Piso;

  constructor(private readonly _pisoRestService: PisoRestService,
              private readonly _router: Router,
              private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarPiso) => {
          const piso$ = this._pisoRestService
            .findOneById(parametros.idPiso);

          piso$
            .subscribe(
              (piso: Piso) => {
                this.pisoAActualizar = piso;
              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );

  }

  actualizarPiso(pisoActualizado) {

    pisoActualizado.id = this.pisoAActualizar.id;

    const pisoActualizada$ = this._pisoRestService
      .updateOneById(pisoActualizado);

    pisoActualizada$
      .subscribe(
        (pisoActualizada: Piso) => {

          const url = [
            '/menu/gestion-pisos'
          ];

          alert('Piso actualizado ' + pisoActualizada.nombrePiso);

          this._router.navigate(url);
        },
        (error) => {
          alert('Ya existe un piso con el nombre ingresado');
          console.error('Error', error);
        }
      );
  }

}

interface ParametrosRutaActualizarPiso {
  idPiso: string;
}

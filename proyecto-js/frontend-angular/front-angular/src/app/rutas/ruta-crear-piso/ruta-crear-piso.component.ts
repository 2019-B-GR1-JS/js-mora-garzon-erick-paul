import { Component, OnInit } from '@angular/core';
import {PisoRestService} from "../../services/rest/piso-rest.service";
import {Piso} from "../../interfaces/piso";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-piso',
  templateUrl: './ruta-crear-piso.component.html',
  styleUrls: ['./ruta-crear-piso.component.scss']
})
export class RutaCrearPisoComponent implements OnInit {

  constructor(private readonly _pisoRestService: PisoRestService,
              private readonly _router: Router,
              private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  crearPiso(pisoObjeto) {

    const crearPiso$ = this._pisoRestService
      .create(
        pisoObjeto.nombrePiso
      );

    crearPiso$
      .subscribe(
        (piso: Piso) => {
          const url = [
            '/menu/gestion-pisos'
          ];
          console.log('Piso');
          alert(`Piso creado de nivel: ${piso.nombrePiso}`);
          this._router.navigate(url);
        },
        (error) => {
          alert(`Ya existe un piso registrado con ese nivel`);
          console.error('Error: ', error);
        }
      );


  }

}

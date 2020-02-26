import { Component, OnInit } from '@angular/core';
import {LuzRestService} from "../../services/rest/luz-rest.service";
import {Luz} from "../../interfaces/luz";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-luz',
  templateUrl: './ruta-crear-luz.component.html',
  styleUrls: ['./ruta-crear-luz.component.scss']
})
export class RutaCrearLuzComponent implements OnInit {

  constructor(private readonly _luzRestService: LuzRestService,
              private readonly _router: Router,
              private readonly _activatedRoute: ActivatedRoute
              ) { }

  ngOnInit() {
  }

  crearLuz(luzObjeto) {

    const crearLuz$ = this._luzRestService
      .create(
        luzObjeto.numLuz,
        luzObjeto.estado,
        luzObjeto.idHabitacion
      );

    crearLuz$
      .subscribe(
        (luz: Luz) => {
          const url = [
            '/menu/gestion-habitaciones/:idHabitacion/gestion-luces'
          ];
          console.log('Luz');
          alert(`Luz creada: ${luz.numLuz}`);
          this._router.navigate(url);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );


  }


}




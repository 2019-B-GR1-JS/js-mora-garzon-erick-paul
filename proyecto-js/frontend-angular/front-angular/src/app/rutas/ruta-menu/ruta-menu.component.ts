import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng";

@Component({
  selector: 'app-ruta-menu',
  templateUrl: './ruta-menu.component.html',
  styleUrls: ['./ruta-menu.component.scss']
})
export class RutaMenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {

    this.items = [
      {label: 'Gestion Usuarios', icon: 'fa fa-fw fa-book' , routerLink: ['/menu/gestion-usuarios']},
      {label: 'Gestion Pisos', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/menu/gestion-pisos']}
      //{label: 'Gestion habitaciones', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/menu/gestion-habitaciones']},
      //{label: 'Gestion luces', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/menu/gestion-luces']}
    ];


  }


}

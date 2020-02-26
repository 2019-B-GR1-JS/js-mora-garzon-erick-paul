import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  items: MenuItem[];

  constructor () {

  }

  ngOnInit(){

    this.items = [

      {
        label: 'Inicio', routerLink: ['/inicio']
      },
      {
        label: 'Iniciar Sesion', routerLink: ['/login']
      },
      {
        label: 'Menu', routerLink: ['/menu']
      }

    ]
  }

}



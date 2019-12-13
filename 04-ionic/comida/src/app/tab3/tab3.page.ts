import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  usuario = {
    nombre: 'Erick',
    apellido: 'Mora'
  };

  constructor() {}
  crearUsuario(formulario: NgForm) {
    console.log(formulario);
  }
}

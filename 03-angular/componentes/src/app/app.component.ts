import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentes';
  arregloObjetos = [
    {
      id:1, // number
      "nombre": "Erick", //string
      apellido: 'Mora', //string
      sueldo: 12.12, //number
      casado: false, //boolean
      comida: "https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg",
      carro: null,
      ojos: undefined,
    },

    {
      id:2, // number
      "nombre": "Adrian", //string
      apellido: 'Eguez', //string
      sueldo: 23.23, //number
      casado: false, //boolean
      comida: "https://static.guiainfantil.com/media/9611/c/como-decorar-la-comida-de-los-ninos-lg.jpg",
      carro: null,
      ojos: undefined,
    },

    {
      id:3, // number
      "nombre": "Ramiro", //string
      apellido: 'Perez', //string
      sueldo: 11.11, //number
      casado: true, //boolean
      comida: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOWZ39cpKhOrbIKHVCmXdldZbwoMJs9O0jSESqGqAFLG0GbB2Mg&s",
      carro: null,
      ojos: undefined,
    }
  ];


  imprimirSueldo(sueldo:string){
    console.log(sueldo);
  }
}

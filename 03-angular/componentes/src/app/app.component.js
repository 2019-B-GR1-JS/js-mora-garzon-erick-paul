var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component } from '@angular/core';
export let AppComponent = class {
    constructor() {
        this.title = 'componentes';
        this.arregloObjetos = [
            {
                id: 1,
                "nombre": "Erick",
                apellido: 'Mora',
                sueldo: 12.12,
                casado: false,
                comida: "https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg",
                carro: null,
                ojos: undefined,
            },
            {
                id: 2,
                "nombre": "Adrian",
                apellido: 'Eguez',
                sueldo: 23.23,
                casado: false,
                comida: "https://static.guiainfantil.com/media/9611/c/como-decorar-la-comida-de-los-ninos-lg.jpg",
                carro: null,
                ojos: undefined,
            },
            {
                id: 3,
                "nombre": "Ramiro",
                apellido: 'Perez',
                sueldo: 11.11,
                casado: true,
                comida: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOWZ39cpKhOrbIKHVCmXdldZbwoMJs9O0jSESqGqAFLG0GbB2Mg&s",
                carro: null,
                ojos: undefined,
            }
        ];
    }
    imprimirSueldo(sueldo) {
        console.log(sueldo);
    }
    imprimirResultado(resultado) {
        //console.log("resultado: "+resultado);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);

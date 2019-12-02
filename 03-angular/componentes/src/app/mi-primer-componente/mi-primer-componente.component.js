var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
export let MiPrimerComponenteComponent = class {
    //importar angular core
    constructor() {
        /*@Input()
        res:string;*/
        this.suma = 0;
        this.resta = 0;
        this.mult = 0;
        this.div = 0;
        this.resultado = new EventEmitter();
        //resultado: any;
        this.tamanoImagen = 200;
        this.cambioSueldo = new EventEmitter();
        console.log('Instanciando');
    } //instancia de la clase
    ngOnInit() {
        console.log('Esta listo');
    }
    ngOnDestroy() {
    }
    saludar() {
        alert("HOLAAAAAAA");
    }
    aumentarSueldo() {
        //this.textoBoton = this.textoBoton + 1;
        this.textoBoton = (Number(this.textoBoton) + 1).toString();
        //this.tamanioImagen = (Number(this.tamanoImagen) + 1).toString();
        this.cambioSueldo.emit(this.textoBoton);
        console.log('Instanciando');
        //this.imagen
        //this.textoBoton = (+this.textoBoton) + 1).toString();
    }
    calcularNum2(evento) {
        const elemento = evento.srcElement, as = any;
        this.num2 = elemento.value;
        console.log('num2 ' + elemento.value);
        /*
            //this.resultado.emit(Number(elemento.value) + Number(elemento.value));
            this.suma= (Number(elemento.value) + Number(elemento.value));
            this.resta= (Number(elemento.value) - Number(elemento.value));
            this.mult= (Number(elemento.value) * Number(elemento.value));
            this.div= (Number(elemento.value) / Number(elemento.value));
        
            //console.log('res '+this.resultado);
            console.log('suma 2 '+this.suma);
            console.log('resta 2 '+this.resta);
            console.log('mult 2 '+this.mult);
            console.log('div 2 '+this.div);
            //console.log('num1 '+this.num1);
            //console.log('num2 '+this.num2);
            this.suma = 0;
            this.resta = 0;
            this.mult = 0;
            this.div = 0;*/
        this.resolver();
    }
    calcularNum1(evento) {
        const elemento = evento.srcElement, as = any;
        this.num1 = elemento.value;
        console.log('num1 ' + elemento.value);
        /*
            //this.resultado.emit(Number(elemento.value) + Number(elemento.value));
            this.suma= (this.suma+ Number(elemento.value) + Number(elemento.value));
            this.resta= (this.suma- Number(elemento.value) - Number(elemento.value));
            this.mult= (this.suma*Number(elemento.value) * Number(elemento.value));
            this.div= (this.suma/ Number(elemento.value) / Number(elemento.value));
        
            //console.log('res '+this.resultado);
            console.log('suma 1 '+this.suma);
            console.log('resta 1 '+this.resta);
            console.log('mult 1 '+this.mult);
            console.log('div 1 '+this.div);
            //console.log('num1 '+this.num1);
            //console.log('num2 '+this.num2);
            this.suma = 0;
            this.resta = 0;
            this.mult = 0;
            this.div = 0;*/
        this.resolver();
    }
    resolver() {
        this.suma = (Number(this.num1) + Number(this.num2));
        this.resta = (Number(this.num1) - Number(this.num2));
        this.mult = (Number(this.num1) * Number(this.num2));
        this.div = (Number(this.num1) / Number(this.num2));
        console.log('suma ' + this.suma);
        console.log('resta ' + this.resta);
        console.log('multiplicacion ' + this.mult);
        console.log('division ' + this.div);
    }
};
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "titulo");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "imagen");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoImagen");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoBoton");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "tamanioImagen");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "num1");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "num2");
__decorate([
    Output()
], MiPrimerComponenteComponent.prototype, "resultado");
__decorate([
    Output()
], MiPrimerComponenteComponent.prototype, "cambioSueldo");
MiPrimerComponenteComponent = __decorate([
    Component({
        selector: 'app-mi-primer-componente',
        templateUrl: './mi-primer-componente.component.html',
        styleUrls: ['./mi-primer-componente.component.scss']
    })
], MiPrimerComponenteComponent);

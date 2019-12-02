import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent implements OnInit {

  //class (etiqueta html) (web-component)
  //Instanciar a la clase
  //Clase esta lista
  //Clase se destruye


  @Input()
  public titulo:string;

  @Input()
  imagen:string;

  @Input()
  textoImagen:string;

  @Input()
  textoBoton:string;

  @Input()
  tamanioImagen:string;

  @Input()
  num1:string;

  @Input()
  num2:string;

  /*@Input()
  res:string;*/
  suma=0;
  resta=0;
  mult=0;
  div=0;

  @Output() //Evento
  public resultado = new EventEmitter();
  //resultado: any;

  tamanoImagen = 200;

  @Output() //Evento
  public cambioSueldo = new EventEmitter();


  //importar angular core

  constructor() {
    console.log('Instanciando');

  }//instancia de la clase

  ngOnInit(): void { //la clase esta lista
    console.log('Esta listo');
  }

  ngOnDestroy(): void{ //la clase esta destruida

  }

  saludar(){
    alert("HOLAAAAAAA");
  }

  aumentarSueldo(){
    //this.textoBoton = this.textoBoton + 1;
    this.textoBoton = (Number(this.textoBoton) + 1).toString();
    //this.tamanioImagen = (Number(this.tamanoImagen) + 1).toString();
    this.cambioSueldo.emit(this.textoBoton);

    console.log('Instanciando');
    //this.imagen
    //this.textoBoton = (+this.textoBoton) + 1).toString();
  }

  calcularNum2(evento){
    const elemento = evento.srcElement as any;
    this.num2 = elemento.value;

    console.log('num2 '+elemento.value);
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

  calcularNum1(evento){
    const elemento = evento.srcElement as any;
    this.num1 = elemento.value;

    console.log('num1 '+elemento.value);
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

  resolver(){
    this.suma= (Number(this.num1) + Number(this.num2));
    this.resta= (Number(this.num1) - Number(this.num2));
    this.mult= (Number(this.num1) * Number(this.num2));
    this.div= (Number(this.num1) / Number(this.num2));
    console.log('suma '+this.suma);
    console.log('resta '+this.resta);
    console.log('multiplicacion '+this.mult);
    console.log('division '+this.div);
  }

}

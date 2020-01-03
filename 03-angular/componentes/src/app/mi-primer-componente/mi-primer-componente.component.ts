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
  ancho: number;
  alto: number;
  suma: number;
  resta: number;
  mult: number;
  div: number;

  @Output() //Evento
  public resultado = new EventEmitter();
  //resultado: any;



  @Output() //Evento
  public cambioSueldo = new EventEmitter();


  //importar angular core

  constructor() {
    console.log('Instanciando');

  }//instancia de la clase

  ngOnInit(): void { //la clase esta lista
    this.ancho = 100;
    this.alto = 100;
    this.suma = 0;
    this.resta = 0;
    this.mult = 0;
    this.div = 0;
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

  aumentarTamanioImagen() {
    this.ancho = this.ancho + 10;
    this.alto = this.alto + 10;
  }

  calcularNum2(evento){
    const elemento = evento.srcElement as any;
    this.num2 = elemento.value;

    console.log('num2 '+elemento.value);

    this.resolver();
  }

  calcularNum1(evento){
    const elemento = evento.srcElement as any;
    this.num1 = elemento.value;

    console.log('num1 '+elemento.value);

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

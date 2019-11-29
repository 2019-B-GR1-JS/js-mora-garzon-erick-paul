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
  res1=0;
  res2=0;
  res3=0;
  res4=0;

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

  calcular(evento:KeyboardEvent){

    console.log(evento);



    const elemento = evento.srcElement as any;
    elemento.value;

    //this.resultado.emit(Number(elemento.value) + Number(elemento.value));
    this.res1= (Number(elemento.value) + Number(elemento.value));
    this.res2= (Number(elemento.value) - Number(elemento.value));
    this.res3= (Number(elemento.value) * Number(elemento.value));
    this.res4= (Number(elemento.value) / Number(elemento.value));

    console.log('elemento '+elemento);
    console.log('elemento '+elemento.value);
    console.log('evento '+evento);

    //console.log('res '+this.resultado);
    console.log('suma '+this.res1);
    console.log('resta '+this.res2);
    console.log('mult '+this.res3);
    console.log('div '+this.res4);
    //console.log('num1 '+this.num1);
    //console.log('num2 '+this.num2);
    this.res1 = 0;
    this.res2 = 0;
    this.res3 = 0;
    this.res4 = 0;
  }

  calcular1(evento:KeyboardEvent){


    console.log('evento '+evento);

    const elemento = evento.srcElement as any;
    elemento.value;


    console.log('elemento '+elemento);
    console.log('elemento '+elemento.value);
    console.log('evento '+evento);

    //this.resultado.emit(Number(elemento.value) + Number(elemento.value));
    this.res1= (this.res1+ Number(elemento.value) + Number(elemento.value));
    this.res2= (this.res1- Number(elemento.value) - Number(elemento.value));
    this.res3= (this.res1*Number(elemento.value) * Number(elemento.value));
    this.res4= (this.res1/ Number(elemento.value) / Number(elemento.value));

    //console.log('res '+this.resultado);
    console.log('suma '+this.res1);
    console.log('resta '+this.res2);
    console.log('mult '+this.res3);
    console.log('div '+this.res4);
    //console.log('num1 '+this.num1);
    //console.log('num2 '+this.num2);
    this.res1 = 0;
    this.res2 = 0;
    this.res3 = 0;
    this.res4 = 0;
  }

}

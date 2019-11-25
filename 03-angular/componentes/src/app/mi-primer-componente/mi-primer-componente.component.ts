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

  @Output() //Evento
  public cambioSueldo = new EventEmitter(); //importar angular core

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
    this.cambioSueldo.emit(this.textoBoton);
    //this.imagen
    //this.textoBoton = (+this.textoBoton) + 1).toString();
  }

}

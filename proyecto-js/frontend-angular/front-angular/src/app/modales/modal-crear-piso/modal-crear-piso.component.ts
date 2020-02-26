import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-crear-piso',
  templateUrl: './modal-crear-piso.component.html',
  styleUrls: ['./modal-crear-piso.component.scss']
})
export class ModalCrearPisoComponent implements OnInit {

  @Input()
  nombre: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido= new EventEmitter();


  nombrePiso: string;

  constructor() { }

  ngOnInit() {
    this.nombrePiso = this.nombre
  }

  emitirFormularioValido() {
    const objetoPiso = {
      nombrePiso: this.nombrePiso
    };
    this.formularioValido.emit(objetoPiso);
  }



}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-crear-luz',
  templateUrl: './modal-crear-luz.component.html',
  styleUrls: ['./modal-crear-luz.component.scss']
})
export class ModalCrearLuzComponent implements OnInit {

  @Input()
  nombre: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido= new EventEmitter();

  numLuz: string;
  estado: string;
  idHabitacion: number;

  constructor() { }

  ngOnInit() {
    this.numLuz = this.nombre
  }

  emitirFormularioValido() {
    const objetoHabitacion = {
      numLuz: this.numLuz,
      estado: this.estado,
      idHabitacion: this.idHabitacion
    };
    this.formularioValido.emit(objetoHabitacion);
  }



}


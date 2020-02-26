import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-crear-habitacion',
  templateUrl: './modal-crear-habitacion.component.html',
  styleUrls: ['./modal-crear-habitacion.component.scss']
})
export class ModalCrearHabitacionComponent implements OnInit {

  @Input()
  nombre: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido= new EventEmitter();

  numHabitacion: string;
  estado: string;
  tipoHabitacion: string;
  idTipoHabitacion: number;
  idPiso: number;


  constructor() { }

  ngOnInit() {
    this.numHabitacion = this.nombre
  }

  emitirFormularioValido() {
    const objetoHabitacion = {
      numHabitacion: this.numHabitacion,
      estado: this.estado,
      tipoHabitacion: this.tipoHabitacion,
      idTipoHabitacion: this.idTipoHabitacion,
      idPiso: this.idPiso
    };
    this.formularioValido.emit(objetoHabitacion);
  }



}


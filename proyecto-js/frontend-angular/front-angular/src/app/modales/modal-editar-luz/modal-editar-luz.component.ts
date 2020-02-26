import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-luz',
  templateUrl: './modal-editar-luz.component.html',
  styleUrls: ['./modal-editar-luz.component.scss']
})
export class ModalEditarLuzComponent implements OnInit {

  @Input()
  nombreLuz: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido= new EventEmitter();

  numLuz= "";
  estado= "";
  idHabitacion= "";
  crear = false;

  constructor(
    public dialogRef: MatDialogRef<ModalEditarLuzComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {

  }

  ngOnInit() {
    console.log('datos en modal', this.data);
    if (this.data.luz !== undefined) {
      this.numLuz = this.data.luz.numLuz;
      this.estado = this.data.luz.estado;
      this.idHabitacion = this.data.luz.idHabitacion.id;

    } else {
      this.crear = true;
      this.idHabitacion = this.data;
    }
  }

  cancelar(){
    this.dialogRef.close();
  }

  aceptar(){
    this.dialogRef.close({
      numLuz: this.numLuz,
      estado: this.estado,
      idHabitacion: this.idHabitacion
    });
  }

  emitirFormularioValido() {
    const objetoLuz = {
      numLuz: this.numLuz,
      estado: this.estado,
      idHabitacion: this.idHabitacion
    };
    this.formularioValido.emit(objetoLuz);
  }
}


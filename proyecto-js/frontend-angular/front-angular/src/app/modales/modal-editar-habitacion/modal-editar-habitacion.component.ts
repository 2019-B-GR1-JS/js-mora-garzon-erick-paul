import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-habitacion',
  templateUrl: './modal-editar-habitacion.component.html',
  styleUrls: ['./modal-editar-habitacion.component.scss']
})
export class ModalEditarHabitacionComponent implements OnInit {

  @Input()
  nombreHabitacion: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido= new EventEmitter();

  numHabitacion= "";
  estado= "";
  tipoHabitacion= "";
  idTipoHabitacion= "";
  idPiso= "";
  crear = false;

  constructor(
    public dialogRef: MatDialogRef<ModalEditarHabitacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {

  }

  ngOnInit() {

    console.log('datos en modal', this.data);
    if (this.data.habitacion !== undefined) {
      this.numHabitacion = this.data.habitacion.numHabitacion;
      this.estado = this.data.habitacion.estado;
      this.tipoHabitacion = this.data.habitacion.tipoHabitacion;
      //this.idTipoHabitacion = this.data.habitacion.idTipoHabitacion;
      this.idPiso = this.data.habitacion.idPiso.id;

    } else {
      this.crear = true;
      this.idPiso = this.data;
    }
  }

  cancelar(){
    this.dialogRef.close();
  }

  aceptar(){
    this.dialogRef.close({
      numHabitacion: this.numHabitacion,
      estado: this.estado,
      tipoHabitacion: this.tipoHabitacion,
      //idTipoHabitacion: this.idTipoHabitacion,
      idPiso: this.idPiso
    });
  }

  emitirFormularioValido() {
    const objetoHabitacion = {
      numHabitacion: this.numHabitacion,
      estado: this.estado,
      tipoHabitacion: this.tipoHabitacion,
      //idTipoHabitacion: this.idTipoHabitacion,
      idPiso: this.idPiso
    };
    this.formularioValido.emit(objetoHabitacion);
  }
}


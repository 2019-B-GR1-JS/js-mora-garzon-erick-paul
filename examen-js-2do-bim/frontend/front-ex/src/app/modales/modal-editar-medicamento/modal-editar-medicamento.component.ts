import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-medicamento',
  templateUrl: './modal-editar-medicamento.component.html',
  styleUrls: ['./modal-editar-medicamento.component.scss']
})
export class ModalEditarMedicamentoComponent implements OnInit {

  numero = '';
  nombre = '';
  composicion = '';
  uso = '';
  fechaCaducidad = '';
  numeroPastillas = '';
  precio = '';
  idPaciente = '';
  crear = false;


  constructor(
    public dialogRef: MatDialogRef<ModalEditarMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    console.log('datos que han llegado al modal: ', this.data);
    if (this.data.medicamento !== undefined) {
      this.numero = this.data.medicamento.numero;
      this.nombre = this.data.medicamento.nombre;
      this.composicion = this.data.medicamento.composicion;
      this.uso = this.data.medicamento.uso;
      this.fechaCaducidad = this.data.medicamento.fechaCaducidad;
      this.numeroPastillas = this.data.medicamento.numeroPastillas;
      this.precio = this.data.medicamento.precio;
      this.idPaciente = this.data.medicamento.idPaciente.id;
    } else {
      this.crear = true;
      this.idPaciente = this.data;
    }
  }
  cancelar() {
    this.dialogRef.close(); // cerrar la ventana del modal
  }

  aceptar() {
    this.dialogRef.close({
      numero: this.numero,
      nombre: this.nombre,
      composicion: this.composicion,
      uso: this.uso,
      fechaCaducidad: this.fechaCaducidad,
      numeroPastillas: this.numeroPastillas,
      precio: this.precio,
      idPaciente: this.idPaciente
    });
  }

}

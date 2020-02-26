import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-paciente',
  templateUrl: './modal-editar-paciente.component.html',
  styleUrls: ['./modal-editar-paciente.component.scss']
})
export class ModalEditarPacienteComponent implements OnInit {

  nombre = '';
  apellido = '';
  fechaNacimiento = '';
  numeroHijos = '';
  crear = false;
  constructor(
    public dialogRef: MatDialogRef<ModalEditarPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {
    console.log('datos en modal: ', this.data);
    if (this.data) {
      this.nombre = this.data.paciente.nombre;
      this.apellido = this.data.paciente.apellido;
      this.fechaNacimiento = this.data.paciente.fechaNacimiento;
      this.numeroHijos = this.data.paciente.numeroHijos;
    } else {
      this.crear = true;
    }
  }
  cancelar() {
    this.dialogRef.close(); // cerrar la ventana del modal
  }

  aceptar() {
    this.dialogRef.close({
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento,
      numeroHijos: this.numeroHijos
    });
  }

}


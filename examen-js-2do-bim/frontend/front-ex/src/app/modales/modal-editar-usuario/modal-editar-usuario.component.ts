import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-usuario',
  templateUrl: './modal-editar-usuario.component.html',
  styleUrls: ['./modal-editar-usuario.component.scss']
})
export class ModalEditarUsuarioComponent implements OnInit {

  nombre = '';
  apellido = '';
  correo = '';
  rol = '';

  constructor(
    public dialogRef: MatDialogRef<ModalEditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {
    console.log('datos en modal: ', this.data);
    this.nombre = this.data.usuario.nombre;
    this.apellido = this.data.usuario.apellido;
    this.rol = this.data.usuario.rol;
    this.correo = this.data.usuario.correo;
  }
  cancelar() {
    this.dialogRef.close(); // cerrar la ventana del modal
  }

  aceptar() {
    this.dialogRef.close({
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      rol: this.rol
    });
  }

}


import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-usuario',
  templateUrl: './modal-editar-usuario.component.html',
  styleUrls: ['./modal-editar-usuario.component.scss']
})
export class ModalEditarUsuarioComponent implements OnInit {

  @Input()
  nombreUsuario: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido= new EventEmitter();

  nombre = "";
  apellido = "";
  correo = "";
  password = "";
  numCedula = "";
  telefono = "";
  //rol = "";

  constructor(
    public dialogRef: MatDialogRef<ModalEditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {

  }

  ngOnInit() {
    console.log('datos en modal', this.data);
    this.nombre = this.data.usuario.nombre;
    this.apellido = this.data.usuario.apellido;
    this.numCedula = this.data.usuario.numCedula;
    this.telefono = this.data.usuario.telefono;
    this.correo = this.data.usuario.correo;
    this.password = this.data.usuario.password;
    //this.rol = this.data.usuario.rol;

  }

  cancelar(){
    this.dialogRef.close();
  }

  aceptar(){
    this.dialogRef.close({
      nombre: this.nombre,
      apellido: this.apellido,
      numCedula: this.numCedula,
      telefono: this.telefono,
      correo: this.correo,
      password: this.password,
      //rol: this.rol
    })
  }

  emitirFormularioValido() {
    const objetoUsuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      numCedula: this.numCedula,
      telefono: this.telefono,
      correo: this.correo,
      password: this.password,
      //rol: this.rol
    };
    this.formularioValido.emit(objetoUsuario);
  }
}


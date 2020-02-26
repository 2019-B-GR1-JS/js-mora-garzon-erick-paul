import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-crear-usuario',
  templateUrl: './modal-crear-usuario.component.html',
  styleUrls: ['./modal-crear-usuario.component.scss']
})
export class ModalCrearUsuarioComponent implements OnInit {

  @Input()
  nombre: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido= new EventEmitter();


  nombreUsuario: string;
  apellido: string;
  numCedula: string;
  telefono: string;
  correo: string;
  password: string;
  rol: string;

  constructor() { }

  ngOnInit() {
    this.nombreUsuario = this.nombre
  }

  emitirFormularioValido() {
    const objetoUsuario = {
      nombre: this.nombreUsuario,
      apellido: this.apellido,
      numCedula: this.numCedula,
      telefono: this.telefono,
      correo: this.correo,
      password: this.password
    };
    this.formularioValido.emit(objetoUsuario);
  }



}

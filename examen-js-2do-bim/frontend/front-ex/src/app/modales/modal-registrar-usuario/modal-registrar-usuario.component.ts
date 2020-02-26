import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-modal-registrar-usuario',
  templateUrl: './modal-registrar-usuario.component.html',
  styleUrls: ['./modal-registrar-usuario.component.scss']
})
export class ModalRegistrarUsuarioComponent implements OnInit {
  
  nombre = '';
  apellido = '';
  correo = '';
  password = '';
  passwordConfirmacion = '';
  rol = 'usuario';

  constructor(
    public dialogRef: MatDialogRef<ModalRegistrarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public readonly _httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

  registrar() {
    const url = environment.url + 'usuario';
    const datos = {
      nombre: this.nombre,
      apellido: this.apellido,
      password: this.password,
      correo: this.correo,
      rol: this.rol
    };
    const usuarioIngresadoS = this._httpClient
      .post(url, datos);
    usuarioIngresadoS
      .subscribe(
        (usuarioIngresado) => {
          console.log('Usuario ', this.nombre, 'ingresado exitosamente');
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
    this.dialogRef.close();
  }

  validarPasswordsIguales(): boolean {
    if (this.password === this.passwordConfirmacion) {
      return false;
    } else {
      return true;
    }

  }
}

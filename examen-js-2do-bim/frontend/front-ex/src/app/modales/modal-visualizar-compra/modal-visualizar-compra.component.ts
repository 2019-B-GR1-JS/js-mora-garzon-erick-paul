import {Component, Inject, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-modal-visualizar-compra',
  templateUrl: './modal-visualizar-compra.component.html',
  styleUrls: ['./modal-visualizar-compra.component.scss']
})
export class ModalVisualizarCompraComponent implements OnInit {

  url = environment.url;
  idCabecera = '';
  detalle: any;
  fecha = '';
  total = '';

  constructor(
    public dialogRef: MatDialogRef<ModalVisualizarCompraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public readonly _httpClient: HttpClient,
    public readonly _authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log('datos en modal: ', this.data);
    this.idCabecera = this.data.compra.id;
    this.fecha = this.data.compra.fecha;
    this.total = this.data.compra.total;
    console.log('datos:  ', this.data.compra.fecha);

    this.consultarDetalle();
  }
  consultarDetalle() {
    console.log('RUTA: ', this.url);
    const consulta = this.url + 'detalleCarrito?idCabecera=' + this.idCabecera;
    console.log('CONSULTA: ', consulta);

    const detalleCarritoS = this._httpClient
      .get(consulta);
    detalleCarritoS
      .subscribe(
        (compraObtenida: any) => {
          if (compraObtenida) {
            this.detalle = compraObtenida;
          } else {
            this.detalle = []; // undefined
          }
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  salir() {
    this.dialogRef.close(); // cerrar la ventana del modal
  }
}


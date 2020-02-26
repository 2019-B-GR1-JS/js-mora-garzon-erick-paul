import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../services/auth/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ModalSeleccionarMedicamentoComponent} from "../../modales/modal-seleccionar-medicamento/modal-seleccionar-medicamento.component";

@Component({
  selector: 'app-ruta-tienda',
  templateUrl: './ruta-tienda.component.html',
  styleUrls: ['./ruta-tienda.component.scss']
})
export class RutaTiendaComponent implements OnInit {

  url = environment.url;
  detalleTemporal: Detalle[];
  cabeceraTemporal: '';
  cantidad = 1;
  subtotal: number;
  total: number;
  nombre = this._authService.sesion.nombre;
  apellido = this._authService.sesion.apellido;
  id = this._authService.sesion.id;
  direccion = '';
  fecha = '';
  estado = 'CREADO';
  estadoBoolean = true;
  compraBoolean = false;

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _authService: AuthService,
    private readonly _httpClient: HttpClient,
    private readonly _router : Router
  ) {
  }

  ngOnInit(): void {
    this.detalleTemporal = [];
  }
  mostrarMedicamento() {
    this.estadoBoolean = false;
    const matDialogRefModalSeleccionarMedicamento =  this._matDialog
      .open(
        ModalSeleccionarMedicamentoComponent,
        {width: '850px',
        }
      );
    const respuestaDialog$ = matDialogRefModalSeleccionarMedicamento
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datos) => {
          if (datos) {
            console.log('medicamento seleccionado: ', datos);
            console.log('detalle 1: ', this.detalleTemporal);
            // this.ingresarEntrenadorHttp(datos);
            datos.subtotal = datos.precio * this.cantidad;
            datos.cantidad = this.cantidad;
            this.detalleTemporal.push(datos);
            this.calcularTotal();
            console.log('Esto es el detalle 2: ', this.detalleTemporal);
          } else {
            // undefined
          }
        },
        () => {}
      );

  }

  calcularTotal() {
    this.total = 0;
    for (const i in this.detalleTemporal) {
      this.total = this.total +  this.detalleTemporal[i].subtotal;
    }
  }

  calcularSubtotal(datos, index) {
    console.log('DATO:   ', datos);
    this.detalleTemporal[index].subtotal = +datos.precio * +datos.cantidad;
    console.log('precio: ', datos.precio);
    console.log('cantidad: ', datos.cantidad);
    console.log('medicamentos: ', this.detalleTemporal);
    this.calcularTotal();
  }
  eliminar(index) {
    this.detalleTemporal.splice(index, 1);
  }
  guardarCabecera() {
    this.compraBoolean = true;
    this.estado = 'COMPRADO';
    this.estadoBoolean = true;
    const datosCabecera = {
      idUsuario: this.id,
      estado: this.estado,
      fecha: this.fecha,
      total: this.total,
      direccion: this.direccion
    };
    const urlCabecera = this.url + 'cabeceraCarrito';
    const cabeceraIngresadaS = this._httpClient
      .post(urlCabecera, datosCabecera);
    cabeceraIngresadaS
      .subscribe(
        (cabeceraReg: any) => {
          this.guardarDetalle(cabeceraReg.id);
          console.log ('Id Cabecera guardada', cabeceraReg.id);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  volver() {
    this._router.navigate(['/usuario']);
  }
  guardarDetalle(idCabeceraRec) {
    const urlDetalle = this.url + 'detalleCarrito';
    const datosDetalle = [];
    for (const medicamento of this.detalleTemporal) {
      const medicamentoEnDetalle = {
        idCabecera: idCabeceraRec,
        idMedicamento: medicamento.idMedicamento,
        cantidad: medicamento.cantidad,
        precio: medicamento.precio,
        subtotal: medicamento.subtotal,
      };

      const detalleIngresadoS = this._httpClient
        .post(urlDetalle, medicamentoEnDetalle);
      detalleIngresadoS
        .subscribe(
          (detalleReg: any) => {
            // this.guardarDetalle(cabeceraReg.id);
            console.log('Detalle guardado', detalleReg);
          },
          (error) => {
            console.log('Error: ', error);
          }
        );

    }
  }
}


interface Detalle {
  idMedicamento: number;
  nombreMedicamento: 'string';
  cantidad: number;
  precio: number;
  subtotal: number;
}
interface Cabecera {
  idMedicamento: number;
  nombreMedicamento: 'string';
  cantidad: number;
  precio: number;
  subtotal: number;
}

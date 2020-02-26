import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {AuthService} from "../../services/auth/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ModalVisualizarCompraComponent} from "../../modales/modal-visualizar-compra/modal-visualizar-compra.component";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  urlCompra = environment.url + 'cabeceraCarrito';
  compras = [];
  filas = 5;
  nombre = '';
  apellido = '';
  correo = '';
  busquedaFecha = '';
  id = '';

  constructor(
    private readonly _authService:AuthService,
    private readonly _httpClient: HttpClient,
    private readonly _router: Router,
    private readonly _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.id = this._authService.sesion.id;
    this.nombre = this._authService.sesion.nombre;
    this.apellido = this._authService.sesion.apellido;
    this.correo = this._authService.sesion.correo;
    const consulta = '?idUsuario=' + this.id;
    const urlUsuarioCompra = this.urlCompra + consulta;
    const comprasHechasS = this._httpClient
      .get(urlUsuarioCompra);
    comprasHechasS
      .subscribe(
        (comprasConsultadas: any[]) => {
          this.compras = comprasConsultadas;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando compras',
          });
        }
      );
  }
  buscarPorFecha() {
    let consulta = '?idUsuario=' + this.id;
    if (this.busquedaFecha) {
      consulta = consulta + '&fecha=' + this.busquedaFecha;
    }
    const urlUsuarioCompra = this.urlCompra + consulta;
    const comprasHechasS = this._httpClient
      .get(urlUsuarioCompra);
    comprasHechasS
      .subscribe(
        (comprasConsultadas: any[]) => {
          this.compras = comprasConsultadas;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando compras',
          });
        }
      );
  }
  salir() {
    this._router.navigate(['/login']);
  }
  abrirCompra() {
    this._router.navigate(['/tienda']);
  }
  visualizarCompra(compra) {

    console.log('Datos del paciente: ', compra);
    const matDialogRefModalEditarMedicamento = this._matDialog
      .open(
        ModalVisualizarCompraComponent,
        {width: '500', data: {compra}}
      );
  }
}


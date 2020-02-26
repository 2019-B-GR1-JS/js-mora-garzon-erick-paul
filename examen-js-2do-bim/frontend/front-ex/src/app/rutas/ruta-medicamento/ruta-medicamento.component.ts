import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {MedicamentoRestService} from "../../services/medicamento-rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalEditarMedicamentoComponent} from "../../modales/modal-editar-medicamento/modal-editar-medicamento.component";

@Component({
  selector: 'app-ruta-medicamento',
  templateUrl: './ruta-medicamento.component.html',
  styleUrls: ['./ruta-medicamento.component.scss']
})
export class RutaMedicamentoComponent implements OnInit {

  medicamentos = [];
  idPaciente: number;
  numeroFiltrado: '';
  nombreFiltrado = '';
  composicionFiltrado = '';
  usoFiltrado = '';
  fechaCaducidadFiltrado = '';
  numeroPastillasFiltrado: '';
  precioFiltrado: '';
  filas = 1;
  busquedaMedicamento = '';
  url = 'http://localhost:1337';
  constructor(
    private readonly _httpClient: HttpClient,
    public readonly _matDialog: MatDialog,
    private readonly _medicamentoRestService: MedicamentoRestService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
  }

  ngOnInit() {
    this.escucharParametros();
    /*const urlPokemon = this.url + '/pokemon';
    const pokemon$ = this._httpClient.get(urlPokemon);
    pokemon$
      .subscribe(
        (pokemones: any[]) => {
          this.pokemones = pokemones;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando pokemon'
          });
        }
      );*/
  }
  escucharParametros() {
    const parametrosPaciente$ = this._activatedRoute.params;
    parametrosPaciente$
      .subscribe(
        (parametros: { idPaciente: string }) => {
          this.idPaciente = +parametros.idPaciente;
          this.buscarMedicamentoPorPaciente(+parametros.idPaciente);
        }
      );
  }
  buscarMedicamentoPorPaciente(idPaciente: number) {
    const consulta = `idPaciente=${idPaciente}`;
    const medicamentos$ = this._medicamentoRestService
      .buscarPorPaciente(consulta, this.busquedaMedicamento);
    medicamentos$
      .subscribe(
        (medicamentos) => { // OK
          this.medicamentos = medicamentos;
        },
        (error) => {  // ERROR
          console.error(error);
        }
      );
  }
  buscar() {
    const busqueda$ = this._medicamentoRestService
      .buscar(this.busquedaMedicamento);
    busqueda$
      .subscribe(
        (medicamentos) => {
          this.medicamentos = medicamentos;
        },
        (error) => {
          console.error(error);
        }
      );
  }
  ingresar() {
    const matDialogRefModalIngresarMedicamento =  this._matDialog
      .open(
        ModalEditarMedicamentoComponent,
        {width: '500px', data: this.idPaciente
        }
      );
    const respuestaDialog$ = matDialogRefModalIngresarMedicamento
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datos) => {
          if (datos) {
            this.ingresarMedicamentoHttp(datos);
          } else {
            // undefined
          }
        },
        () => {}
      );
  }
  ingresarMedicamentoHttp(datos) {
    const medicamentoIngresadoS = this._medicamentoRestService
      .ingresar(datos);
    medicamentoIngresadoS
      .subscribe(
        (medicamentoIngresado) => {
          this.medicamentos.push(medicamentoIngresado);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }

  editar(medicamento) {
    console.log('Empieza el metodo editar con estos datos: ', medicamento);
    const matDialogRefModalEditarMedicamento = this._matDialog
      .open(
        ModalEditarMedicamentoComponent,
        {width: '500px', data: {medicamento: medicamento}}
      );
    const  respuestaDialogo$ = matDialogRefModalEditarMedicamento
      .afterClosed();
    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Esta es la respuesta del Dialogo: ', datos);
          if (datos) {
            this.editarMedicamentoHttp(medicamento.id, datos);
          } else {
            // undefined
          }
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  editarMedicamentoHttp(id: number, datos) {
    const medicamentoEditado$ = this._medicamentoRestService
      .editar(id, datos);
    medicamentoEditado$
      .subscribe(
        (medicamentoEditado: any) => {
          console.log('Medicamento editado: ', medicamentoEditado);
          const indice = this.medicamentos
            .findIndex(
              (medicamento) => {
                return medicamento.id === id;
              }
            );
          this.medicamentos[indice].numero = datos.numero;
          this.medicamentos[indice].nombre = datos.nombre;
          this.medicamentos[indice].composicion = datos.composicion;
          this.medicamentos[indice].uso = datos.uso;
          this.medicamentos[indice].fechaCaducidad = datos.fechaCaducidad;
          this.medicamentos[indice].numeroPastillas = datos.numeroPastillas;
          this.medicamentos[indice].precio = datos.precio;
          this.medicamentos[indice].idPaciente.id = datos.idPaciente;
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }

  eliminar(medicamento) {
    const eliminar$ = this._medicamentoRestService
      .eliminar(medicamento.id);
    eliminar$
      .subscribe(
        (medicamentoEliminado) => {
          const indice = this.medicamentos
            .findIndex(
              (medicamentoBuscado) => {
                return medicamentoBuscado.id === medicamentoEliminado.id;
              }
            );
          this.medicamentos.splice(indice, 1);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  volver() {
    this._router.navigate(['/paciente']);
  }

  medicamentosFiltrados() {
    return this.medicamentos.filter(
        (medicamento) => {
          return medicamento.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
        }
      )
      .filter(
        (medicamento) => {
          return medicamento.composicion.toLowerCase().includes(this.composicionFiltrado.toLowerCase());
        }
      )
      .filter(
        (medicamento) => {
          return medicamento.uso.toLowerCase().includes(this.usoFiltrado.toLowerCase());
        }
      )
      .filter(
        (medicamento) => {
          return medicamento.fechaCaducidad.includes(this.fechaCaducidadFiltrado);
        }
      );
  }
}

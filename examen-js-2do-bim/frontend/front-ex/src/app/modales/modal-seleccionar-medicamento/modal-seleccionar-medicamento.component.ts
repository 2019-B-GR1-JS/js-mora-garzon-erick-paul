import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-modal-seleccionar-medicamento',
  templateUrl: './modal-seleccionar-medicamento.component.html',
  styleUrls: ['./modal-seleccionar-medicamento.component.scss']
})
export class ModalSeleccionarMedicamentoComponent implements OnInit {

  medicamentos: any = [];
  busquedaMedicamento = '';
  filas = 1;
  url = 'http://localhost:1337';
  cantidad = 1;

  constructor(
    public dialogRef: MatDialogRef<ModalSeleccionarMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public readonly _httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    const urlMedicamento = this.url + '/medicamento';
    const medicamento$ = this._httpClient
      .get(urlMedicamento);
    medicamento$
      .subscribe(
        (medicamentos: any[]) => {
          console.log('Medicamentos: ', medicamentos);
          this.medicamentos = medicamentos;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando datos',
          });
        }
      );
  }
  buscar() {
    let consulta = '';
    if (this.busquedaMedicamento) {
      consulta = '?nombre='+this.busquedaMedicamento;
    }
    const urlBuscarMedicamento = this.url + '/medicamento' + consulta;
    const medicamentosABuscar$ = this._httpClient
      .get(
        urlBuscarMedicamento
      );
    medicamentosABuscar$
      .subscribe(
        (medicamentosEncontrados) => {
          this.medicamentos = medicamentosEncontrados;
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  cancelar() {
    this.dialogRef.close(); // cerrar la ventana del modal
  }
  enviar(medicamento) {
    this.dialogRef.close({
      nombre: medicamento.nombre,
      precio: medicamento.precio,
      idPaciente: medicamento.idPaciente.id,
      idMedicamento: medicamento.id,
      cantidad: this.cantidad,
      subtotal: this.cantidad * medicamento.precio
    });
  }
}

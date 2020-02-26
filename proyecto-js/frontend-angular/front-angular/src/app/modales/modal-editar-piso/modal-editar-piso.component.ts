import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-piso',
  templateUrl: './modal-editar-piso.component.html',
  styleUrls: ['./modal-editar-piso.component.scss']
})
export class ModalEditarPisoComponent implements OnInit {
  
  @Input()
  nombre: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido= new EventEmitter();


  nombrePiso = "";
  /*idCasa:{
    id: number;
  }*/

  constructor(
    public dialogRef: MatDialogRef<ModalEditarPisoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {

  }

  ngOnInit() {
    console.log('datos en modal', this.data);
    this.nombrePiso = this.data.piso.nombrePiso;

  }

  cancelar(){
    this.dialogRef.close();
  }

  aceptar(){
    this.dialogRef.close({
      nombrePiso: this.nombrePiso
    })
  }
  
  emitirFormularioValido() {
    const objetoPiso = {
      nombrePiso: this.nombrePiso
      //idCasa: this.idCasa
    };
    this.formularioValido.emit(objetoPiso);
  }

}

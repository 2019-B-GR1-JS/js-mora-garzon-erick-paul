import { Component, OnInit } from '@angular/core';
import {PisoRestService} from "../../services/rest/piso-rest.service";
import {Piso} from "../../interfaces/piso";
import {ModalEditarUsuarioComponent} from "../../modales/modal-editar-usuario/modal-editar-usuario.component";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ModalEditarPisoComponent} from "../../modales/modal-editar-piso/modal-editar-piso.component";
import { FILAS } from 'src/app/constantes/numero-filas-por-tabla';

@Component({
  selector: 'app-ruta-gestion-pisos',
  templateUrl: './ruta-gestion-pisos.component.html',
  styleUrls: ['./ruta-gestion-pisos.component.scss']
})
export class RutaGestionPisosComponent implements OnInit {

  pisos =[];
  url = 'http://localhost:1337'; //sails
  FILAS = FILAS;
  nombreFiltrado = '';
  busquedaPiso = '';

  columnas = [
    {field: 'nombrePiso', header: 'Nivel'},
    {field: 'id', header: 'Acciones'}
  ];

  constructor(
    private readonly _pisoRestService: PisoRestService,
    private readonly _httpClient: HttpClient,
    private readonly _matDialog: MatDialog
    ) { }

  ngOnInit() {

    const pisos$ = this._pisoRestService.ListarPisos();

    pisos$.subscribe(
      (pisos: Piso[])=>{
        console.log(pisos);
        this.pisos = pisos;
      }, (error)=>{
        console.error('Error', error);
      }
    )

  }

  eliminar(piso: Piso) {

    const pisoEliminada$ = this._pisoRestService.delete(piso.id);

    pisoEliminada$
      .subscribe(
        (pisoEliminada: Piso) => {

          alert(`Se ha eliminado con exito el piso`);
          console.log('Se elimino:', pisoEliminada);

          const indice = this.pisos
            .findIndex((r) => r.id === piso.id);

          this.pisos.splice(indice, 1);


        },
        (error) => {
          console.error('Error', error);
        }
      );

  }

  buscar(){
    const busqueda$ = this._pisoRestService
      .buscar(this.busquedaPiso);
    busqueda$
      .subscribe(
        (pisos)=>{ //try
          this.pisos = pisos;
        },
        (error)=>{ //catch
          console.error(error)
        }
      )
  }

  editar(piso){
    console.log('Editando piso', piso);
    const matDialogRefModalEditarPiso = this._matDialog
      .open(
        ModalEditarPisoComponent,
        {
          width: '500px',
          data:{
            piso: piso,
          }
        }
      );
    const respuestaDialogo$ = matDialogRefModalEditarPiso
      .afterClosed();
    respuestaDialogo$
      .subscribe(
        (datos)=>{ //try
          console.log('Datos', datos);
          if(datos){
            this.editarPisoHTTP(piso.id, datos)
          }else{
            //undefined
          }
        },
        (error)=>{ //catch
          console.log('Error', error);
        }
      );
  }

  editarPisoHTTP(id: number, datos) {
    const pisoEditado$ = this._pisoRestService
      .editar(id, datos);
    pisoEditado$
      .subscribe(
        (pisoEditado: any) => { //try
          console.log(pisoEditado);
          const indice = this.pisos
            .findIndex(
              (piso)=>{
                return piso.id === id;
              }
            );
          this.pisos[indice].nombrePiso = datos.nombrePiso;

        },
        (error) => { //catch
          console.error(error)
        }
      )
  }


  pisosFiltrados(){

    return this.pisos.filter(
      (piso) => {
        return piso.nombrePiso.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
      }
    );

  }




}

import { Component, OnInit } from '@angular/core';
import {HabitacionRestService} from "../../services/rest/habitacion-rest.service";
import {Habitacion} from "../../interfaces/habitacion";
import {ModalEditarUsuarioComponent} from "../../modales/modal-editar-usuario/modal-editar-usuario.component";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {ModalEditarHabitacionComponent} from "../../modales/modal-editar-habitacion/modal-editar-habitacion.component";
import { FILAS } from 'src/app/constantes/numero-filas-por-tabla';
import {ActivatedRoute} from "@angular/router";
import {PisoRestService} from "../../services/rest/piso-rest.service";
import {Piso} from "../../interfaces/piso";

@Component({
  selector: 'app-ruta-gestion-habitaciones',
  templateUrl: './ruta-gestion-habitaciones.component.html',
  styleUrls: ['./ruta-gestion-habitaciones.component.scss']
})
export class RutaGestionHabitacionesComponent implements OnInit {

  piso: Piso;
  habitaciones =[];
  idPiso: number;
  habitacions: any[] = [];
  busquedaHabitacion = '';
  FILAS = FILAS;
  url = 'http://localhost:1337'; //sails

  columnas = [
    {field: 'numHabitacion', header: 'Numero'},
    {field: 'estado', header: 'Estado'},
    {field: 'tipoHabitacion', header: 'Tipo de Habitacion'},
    //{field: 'idPiso', header: 'Nivel'},
    {field: 'id', header: 'Acciones'}
  ];
  //cuarto: any;
  //piso: any;


  constructor(
    private readonly _habitacionRestService: HabitacionRestService,
    private readonly _pisoRestService: PisoRestService,
    private readonly _matDialog: MatDialog,
    private readonly _httpClient: HttpClient,
    private readonly _route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.escucharParametros();
    /*const habitaciones$ = this._habitacionRestService.listarHabitacion();

    habitaciones$.subscribe(
      (habitacions: Habitacion[])=>{
        console.log('Habitaciones: ',habitacions);
        this.habitaciones = habitacions;
      }, (error)=>{
        console.error(
          {
            error: error,
            mensaje: 'Error consultando habitaciones'
          }
        );
      }
    )*/
/*
    const rutaActiva$ = this._route.params;

    rutaActiva$.subscribe(parametros => {
      const pisoEncontrada = this._pisoRestService.findOneById(
        +parametros.idPiso
      );

      pisoEncontrada.subscribe(
        piso => {
          this.piso = piso;
          const habitaciones$ = this._habitacionRestService.findAllByPiso(this.piso.id);
          habitaciones$.subscribe(
            (habitacions: Habitacion[])=>{

              this.habitaciones = habitacions;
              console.log('piso id: ', this.piso.id);
              console.log('Habitaciones: ', this.habitaciones);
            }, (error)=>{
              console.error(
                {
                  error: error,
                  mensaje: 'Error consultando habitaciones'
                }
              );
            }
          )
        },
        error => {
          console.error(error);
        }
      );
    });

*/
  }

  eliminar(habitacion: Habitacion) {

    const pisoEliminada$ = this._habitacionRestService.delete(habitacion.id);

    pisoEliminada$
      .subscribe(
        (habitacionEliminada: Habitacion) => {

          alert(`Se ha eliminado con exito la habitacion`);
          console.log('Se elimino:', habitacionEliminada);

          const indice = this.habitaciones
            .findIndex((r) => r.id === habitacion.id);

          this.habitaciones.splice(indice, 1);


        },
        (error) => {
          console.error('Error', error);
        }
      );

  }

  buscar(){
    const busqueda$ = this._habitacionRestService
      .buscar(this.busquedaHabitacion);
    busqueda$
      .subscribe(
        (habitacions)=>{ //try
          this.habitaciones = habitacions;
        },
        (error)=>{ //catch
          console.error(error)
        }
      )
  }

  editar(habitacion){
    console.log('Editando habitacion', habitacion);
    const matDialogRefModalEditarHabitacion = this._matDialog
      .open(
        ModalEditarHabitacionComponent,
        {
          width: '500px',
          data:{
            habitacion: habitacion,
          }
        }
      );
    const respuestaDialogo$ = matDialogRefModalEditarHabitacion
      .afterClosed();
    respuestaDialogo$
      .subscribe(
        (datos)=>{ //try
          console.log('Datos', datos);
          if(datos){
            this.editarHabitacionHTTP(habitacion.id, datos)
          }else{
            //undefined
          }
        },
        (error)=>{ //catch
          console.log('Error', error);
        }
      );
  }

  editarHabitacionHTTP(id: number, datos) {
    const habitacionEditado$ = this._habitacionRestService
      .editar(id, datos);
    habitacionEditado$
      .subscribe(
        (habitacionEditado: any) => { //try
          console.log(habitacionEditado);
          const indice = this.habitaciones
            .findIndex(
              (habitacion)=>{
                return habitacion.id === id;
              }
            );
          this.habitaciones[indice].numHabitacion = datos.numHabitacion;
          this.habitaciones[indice].estado = datos.estado;
          this.habitaciones[indice].tipoHabitacion = datos.tipoHabitacion;
          this.habitaciones[indice].idTipoHabitacion = datos.idTipoHabitacion;
          this.habitaciones[indice].idPiso = datos.idPiso;

        },
        (error) => { //catch
          console.error(error)
        }
      )
  }



  ingresar() {
    console.log('piso: ', this.idPiso);
    const matDialogRefModalIngresarHabitacion =  this._matDialog
      .open(
        ModalEditarHabitacionComponent,
        {width: '500px', data: this.idPiso
        }
      );
    const respuestaDialog$ = matDialogRefModalIngresarHabitacion
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datos) => {
          if (datos) {
            this.ingresarHabitacionHttp(datos);
          } else {
            // undefined
          }
        },
        () => {}
      );
  }
  ingresarHabitacionHttp(datos) {
    const habitacionIngresadoS = this._habitacionRestService
      .ingresar(datos);
    habitacionIngresadoS
      .subscribe(
        (habitacionIngresado) => {
          this.habitaciones.push(habitacionIngresado);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }


  escucharParametros() {
    const parametrosPiso$ = this._route.params;
    parametrosPiso$
      .subscribe(
        (parametros: { idPiso: string }) => {
          this.idPiso = +parametros.idPiso;
          this.buscarHabitacionPorPiso(+parametros.idPiso);
        }
      );
  }
  buscarHabitacionPorPiso(idPiso: number) {
    const consulta = `idPiso=${idPiso}`;
    const habitaciones$ = this._habitacionRestService
      .buscarPorPiso(consulta, this.busquedaHabitacion);
    habitaciones$
      .subscribe(
        (habitaciones) => { // OK
          this.habitaciones = habitaciones;
        },
        (error) => {  // ERROR
          console.error(error);
        }
      );
  }






}

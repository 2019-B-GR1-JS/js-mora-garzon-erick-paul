import { Component, OnInit } from '@angular/core';
import {HabitacionRestService} from "../../services/rest/habitacion-rest.service";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {Habitacion} from "../../interfaces/habitacion";
import {ModalEditarHabitacionComponent} from "../../modales/modal-editar-habitacion/modal-editar-habitacion.component";
import { FILAS } from 'src/app/constantes/numero-filas-por-tabla';
import {LuzRestService} from "../../services/rest/luz-rest.service";
import {Luz} from "../../interfaces/luz";
import {ModalEditarLuzComponent} from "../../modales/modal-editar-luz/modal-editar-luz.component";
import {Message} from "primeng";
import {ActivatedRoute} from "@angular/router";
import {LedRestService} from "../../services/rest/led-rest.service";

@Component({
  selector: 'app-ruta-gestion-luces',
  templateUrl: './ruta-gestion-luces.component.html',
  styleUrls: ['./ruta-gestion-luces.component.scss']
})
export class RutaGestionLucesComponent implements OnInit {

  notificaciones =[];
  msgs: Message[] = [];
  open = '/Open';
  close = '/Close';

  habitacion: Habitacion;
  idHabitacion: number;
  luces =[];
  leds: any[] = [];
  busquedaLuz = '';
  FILAS = FILAS;
  url = 'http://localhost:1337'; //sails

  columnas = [
    {field: 'numLuz', header: 'Numero'},
    {field: 'estado', header: 'Estado'},
    //{field: 'idHabitacion', header: 'ID Habitacion'},
    {field: 'id', header: 'Acciones'}
  ];
  //piso: any;

  constructor(
    private readonly _luzRestService: LuzRestService,
    private readonly _habitacionRestService: HabitacionRestService,
    private readonly _ledRestService: LedRestService,
    private readonly _matDialog: MatDialog,
    private readonly _httpClient: HttpClient,
    private readonly _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.escucharParametros();
/*
    const luces$ = this._luzRestService.listarLuz();

    luces$.subscribe(
      (luzs: Luz[])=>{
        console.log('Luces: ',luzs);
        this.luces = luzs;
      }, (error)=>{
        console.error(
          {
            error: error,
            mensaje: 'Error consultando luces'
          }
        );
      }
    );*/
/*
    const rutaActiva$ = this._route.params;

    rutaActiva$.subscribe(parametros => {
      const habitacionEncontrada = this._habitacionRestService.findOneById(
        +parametros.idHabitacion
      );

      habitacionEncontrada.subscribe(
        habitacion => {
          this.habitacion = habitacion;
          const luz$ = this._luzRestService.findAllByHabitacion(this.habitacion.id);
          luz$.subscribe(
            luces => {
              this.luces = luces;
              console.log(this.luces);
            },
            error => {
              console.error(error);
            }
          );
        },
        error => {
          console.error(error);
        }
      );
    });
*/
  }

  eliminar(luz: Luz) {

    const luzEliminada$ = this._luzRestService.delete(luz.id);

    luzEliminada$
      .subscribe(
        (luzEliminada: Luz) => {

          alert(`Se ha eliminado con exito la luz`);
          console.log('Se elimino:', luzEliminada);

          const indice = this.luces
            .findIndex((r) => r.id === luz.id);

          this.luces.splice(indice, 1);

        },
        (error) => {
          console.error('Error', error);
        }
      );

  }

  buscar(){
    const busqueda$ = this._luzRestService
      .buscar(this.busquedaLuz);
    busqueda$
      .subscribe(
        (luzes)=>{ //try
          this.luces = luzes;
        },
        (error)=>{ //catch
          console.error(error)
        }
      )
  }

  editar(luz){
    console.log('Editando luz', luz);
    const matDialogRefModalEditarLuz = this._matDialog
      .open(
        ModalEditarLuzComponent,
        {
          width: '500px',
          data:{
            luz: luz,
          }
        }
      );
    const respuestaDialogo$ = matDialogRefModalEditarLuz
      .afterClosed();
    respuestaDialogo$
      .subscribe(
        (datos)=>{ //try
          console.log('Datos', datos);
          if(datos){
            this.editarLuzHTTP(luz.id, datos)
          }else{
            //undefined
          }
        },
        (error)=>{ //catch
          console.log('Error', error);
        }
      );
  }

  editarLuzHTTP(id: number, datos) {
    const luzEditado$ = this._luzRestService
      .editar(id, datos);
    luzEditado$
      .subscribe(
        (luzEditado: any) => { //try
          console.log(luzEditado);
          const indice = this.luces
            .findIndex(
              (luz)=>{
                return luz.id === id;
              }
            );
          this.luces[indice].numLuz = datos.numLuz;
          this.luces[indice].estado = datos.estado;
          this.luces[indice].idHabitacion = datos.idHabitacion;

        },
        (error) => { //catch
          console.error(error)
        }
      )
  }

  showSuccess1() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Exito:', detail:'Luz encendida'});
    //this._httpClient.post(environment.url3+this.open,'');

  }

  showSuccess2() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Exito:', detail:'Luz apagada'});
    //this._httpClient.post(environment.url3,this.close);
    //console.log(environment.url3+this.close);

  }

  cambiarEstado(idLed) {
    const led = this.luces[idLed];
    const estado = !this.luces[idLed].estado;
    const status = estado ? 'on' : 'off';
    this.luces[idLed].estado = estado;
    const ledSwitch$ = this._ledRestService.switchLed(idLed, status);
    ledSwitch$.subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
    const luces$ = this._luzRestService.updateOneById(led);
    luces$.subscribe(
      luces => {
        console.log(luces);
      },
      error => {
        console.error(error);
      }
    );
  }

  ingresar() {
    console.log('habitacion: ', this.idHabitacion);
    const matDialogRefModalIngresarLuz =  this._matDialog
      .open(
        ModalEditarLuzComponent,
        {width: '500px', data: this.idHabitacion
        }
      );
    const respuestaDialog$ = matDialogRefModalIngresarLuz
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datos) => {
          if (datos) {
            this.ingresarLuzHttp(datos);
          } else {
            // undefined
          }
        },
        () => {}
      );
  }
  ingresarLuzHttp(datos) {
    const luzIngresadoS = this._luzRestService
      .ingresar(datos);
    luzIngresadoS
      .subscribe(
        (luzIngresado) => {
          this.luces.push(luzIngresado);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }



  escucharParametros() {
    const parametrosHabitacion$ = this._route.params;
    parametrosHabitacion$
      .subscribe(
        (parametros: { idHabitacion: string }) => {
          this.idHabitacion = +parametros.idHabitacion;
          this.buscarLuzPorHabitacion(+parametros.idHabitacion);
        }
      );
  }
  buscarLuzPorHabitacion(idHabitacion: number) {
    const consulta = `idHabitacion=${idHabitacion}`;
    const luces$ = this._luzRestService
      .buscarPorHabitacion(consulta, this.busquedaLuz);
    luces$
      .subscribe(
        (luces) => { // OK
          this.luces = luces;
        },
        (error) => {  // ERROR
          console.error(error);
        }
      );
  }


  accionar(estado:boolean,evento,luz:Luz){
    console.log("Ejecutar accion sobre: ",luz);
    // Llamar al servicio conrrespondiente


    console.log('el estado es: ',estado);


    if(estado == true){
      this._luzRestService.apagar(luz.id).subscribe(
        (respuesta)=>{
          console.log(respuesta);
        },
        (error) => console.log(error),
        ()=>{
          // Actualizar tabla
          this.refrescarComponentes(this.idHabitacion)
        }
      );

    }else{
      this._luzRestService.accionar(luz.id).subscribe(
        (respuesta)=>{
          console.log(respuesta);
        },
        (error) => console.log(error),
        ()=>{
          // Actualizar tabla
          this.refrescarComponentes(this.idHabitacion)
        }
      );
    }

  }




  refrescarComponentes(idHabitacion:number){
    this._luzRestService.buscarParametro({idHabitacion:idHabitacion}).subscribe(
      (luces)=>{
        console.log("Estos son:", luces);
        this.luces=luces;
      },
      (error)=>console.log(error)
    )
  }





}

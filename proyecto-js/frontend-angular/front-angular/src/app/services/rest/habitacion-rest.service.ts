import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Habitacion} from "../../interfaces/habitacion";
import {Luz} from "../../interfaces/luz";

@Injectable({
  providedIn: 'root'
})
export class HabitacionRestService {

  nombreModelo = '/habitacion';
  url = environment.url + '/habitacion';
  constructor(private readonly _httpClient: HttpClient) {

  }

  listarHabitacion():Observable<Habitacion[]> {
    //Observable
    const cuartos$ =
      this._httpClient
        .get(environment.url+this.nombreModelo)
        .pipe(map(r => <Habitacion[]> r));
    return cuartos$;
  }


  delete(id: number): Observable<Habitacion> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Habitacion> r)); // Castear
  }

  create(numHabitacion: string,
         estado: string,
         tipoHabitacion: string,
         idTipoHabitacion: number,
         idPiso: number
        ): Observable<Habitacion> {

    const objetoAGuardar = {
      numHabitacion: numHabitacion,
      estado: estado,
      tipoHabitacion: tipoHabitacion,
      idTipoHabitacion: idTipoHabitacion,
      idPiso: idPiso
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Habitacion> r)); // Castear
  }

  buscar(busqueda: string): Observable<any>{

    let consulta = '';
    if(busqueda){
      consulta = '?numHabitacion=' + busqueda;
    }

    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );

  }

  editar(id: number, datos): Observable<any>{
    const urlEditar = this.url + '/' + id;
    //'http://localhost:1337/usuario/ID'
    return this._httpClient
      .put(
        urlEditar,
        datos
      );

  }

  findOneById(id: number | string): Observable<Habitacion> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url) as Observable<Habitacion>
      //.pipe(map(r => <Habitacion> r)); // Castear
  }

  updateOneById(habitacion: Habitacion) {

    const url = environment.url + this.nombreModelo
      + '/' + habitacion.id;

    return this._httpClient
      .put(url, habitacion)
      .pipe(map(r => <Habitacion> r)); // Castear

  }

  findAllByPiso(idPiso: number | string): Observable<Habitacion[]> {
    const url =
      environment.url + this.nombreModelo + '?idPiso=' + idPiso;
    return this._httpClient.get(url) as Observable<Habitacion[]>;
  }

  ingresar(datos): Observable<any> {
    console.log('Insertar: ',datos);
    const ingresarUrl = this.url;
    return this._httpClient
      .post(
        ingresarUrl,
        datos,
      );
  }

  buscarPorPiso(busqueda, numHabitacion): Observable<any>{

    let consulta = '';
    if (busqueda) {
      consulta = '?' + busqueda;
    }
    if(numHabitacion) {
      consulta = consulta + '&numHabitacion=' + numHabitacion;
    }
    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );
  }

}

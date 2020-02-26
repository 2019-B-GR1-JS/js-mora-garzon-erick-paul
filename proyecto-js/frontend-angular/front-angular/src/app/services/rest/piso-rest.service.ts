import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Piso} from "../../interfaces/piso";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Usuario} from "../../interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class PisoRestService {

  nombreModelo = '/piso';
  open = '/Open';
  close = '/Close';
  url = environment.url + '/piso';
  piso: any;

  constructor(private readonly _httpClient: HttpClient) {

  }

  ListarPisos():Observable<Piso[]> {
    //Observable
    const pisos$ =
      this._httpClient
        .get(environment.url+this.nombreModelo)
        .pipe(map(r => <Piso[]> r));
    return pisos$;
  }


  delete(id: number): Observable<Piso> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Piso> r)); // Castear
  }

  buscar(busqueda: string): Observable<any>{

    let consulta = '';
    if(busqueda){
      consulta = '?nombrePiso=' + busqueda;
    }

    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );

  }

  create(nombrePiso:string
         ): Observable<Piso> {

    const objetoAGuardar = {
      nombrePiso: nombrePiso
     
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Piso> r)); // Castear
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

  findOneById(id: number | string): Observable<Piso> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <Piso> r)); // Castear
  }

  updateOneById(piso: Piso) {

    const url = environment.url + this.nombreModelo
      + '/' + piso.id;

    return this._httpClient
      .put(url, piso)
      .pipe(map(r => <Piso> r)); // Castear

  }

}

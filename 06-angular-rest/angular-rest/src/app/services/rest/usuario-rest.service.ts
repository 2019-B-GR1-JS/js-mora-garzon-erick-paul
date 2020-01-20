// Servicio es un SINGLETON
// Solo 1 instancia del servicio

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsuarioRestService {
  //Inyeccion de dependencias
  url = environment.url + '/usuario';
  constructor(
    private readonly _httpClient: HttpClient,  //Servicio // -> http
  ){

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

  buscar(busqueda: string): Observable<any>{

    let consulta = '';
    if(busqueda){
      consulta = '?nombre=' + busqueda;
    }

    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );

  }

  eliminar(id: number): Observable<any>{

    const urlBuscar = this.url + '/' + id;

    return this._httpClient
      .delete(
        urlBuscar
      );

  }



}


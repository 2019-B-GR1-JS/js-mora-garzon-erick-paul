// Servicio es un SINGLETON
// Solo 1 instancia del servicio

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Usuario} from "../../interfaces/usuario";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class UsuarioRestService {
  //Inyeccion de dependencias
  url = environment.url + '/usuario';
  nombreModelo = '/usuario';
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

  create(nombre: string,
         apellido: string,
         numCedula: string,
         telefono: string,
         correo: string,
         password: string): Observable<Usuario> {

    const objetoAGuardar = {
      nombre: nombre,
      apellido: apellido,
      numCedula: numCedula,
      telefono: telefono,
      correo: correo,
      password: password
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Usuario> r)); // Castear
  }

  findOneById(id: number | string): Observable<Usuario> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <Usuario> r)); // Castear
  }

  updateOneById(usuario: Usuario) {

    const url = environment.url + this.nombreModelo
      + '/' + usuario.id;

    return this._httpClient
      .put(url, usuario)
      .pipe(map(r => <Usuario> r)); // Castear

  }




}


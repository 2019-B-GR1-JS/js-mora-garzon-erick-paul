// Servicio es un SINGLETON
// Solo 1 instancia del servicio

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UsuarioRestService {
  //Inyeccion de dependencias
  constructor(
    private readonly _httpClient: HttpClient  //Servicio // -> http
  ){

  }

}


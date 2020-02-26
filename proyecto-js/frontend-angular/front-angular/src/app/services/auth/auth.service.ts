import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Usuario} from "../../interfaces/usuario";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  usuario:Usuario;
  estaLogeado = false;
  sesion;

  constructor(private readonly _httpClient: HttpClient){

  }

  login(correo: string, password:string){
    const url = environment.url + `/usuario?correo=${correo}&password=${password}`;
    return this._httpClient
      .get(
        url
      );

  }
}

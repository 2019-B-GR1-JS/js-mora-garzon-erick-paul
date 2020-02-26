import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogueado = false;
  sesion;

  constructor(
    private readonly _httpClient: HttpClient
  ){

  }

  login(correo: string, password: string){
    const url = environment.url + `usuario?correo=${correo}&password=${password}`;
    console.log('url', url);
    return this._httpClient
      .get(
        url
      );
  }

}

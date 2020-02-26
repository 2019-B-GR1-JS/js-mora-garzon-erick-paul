import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Luz} from "../../interfaces/luz";
import {Respuesta} from "../../interfaces/respuesta";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LuzRestService {

  nombreModelo = '/luz';
  url = environment.url + '/luz';
  constructor(private readonly _httpClient: HttpClient,
              private readonly _router: Router
  ) {

  }

  listarLuz():Observable<Luz[]> {
    //Observable
    const luces$ =
      this._httpClient
        .get(environment.url+this.nombreModelo)
        .pipe(map(r => <Luz[]> r));
    return luces$;
  }


  delete(id: number): Observable<Luz> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Luz> r)); // Castear
  }

  create(numLuz: string,
         estado: string,
         idHabitacion: number
  ): Observable<Luz> {

    const objetoAGuardar = {
      numLuz: numLuz,
      estado: false,
      idHabitacion: idHabitacion
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Luz> r)); // Castear
  }

  buscar(busqueda: string): Observable<any>{

    let consulta = '';
    if(busqueda){
      consulta = '?numLuz=' + busqueda;
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

  findOneById(id: number | string): Observable<Luz> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <Luz> r)); // Castear
  }

  updateOneById(luz: Luz) {

    const url = environment.url + this.nombreModelo
      + '/' + luz.id;

    return this._httpClient
      .put(url, luz)
      .pipe(map(r => <Luz> r)); // Castear

  }

  findAllByHabitacion(idHabitacion: number | string): Observable<Luz[]> {
    const url =
      environment.url + this.nombreModelo + '?idHabitacion=' + idHabitacion;
    return this._httpClient.get(url) as Observable<Luz[]>;
  }

  buscarPorHabitacion(busqueda, numLuz): Observable<any>{

    let consulta = '';
    if (busqueda) {
      consulta = '?' + busqueda;
    }
    if(numLuz) {
      consulta = consulta + '&numLuz=' + numLuz;
    }
    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );
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

  accionar(id:number):Observable<Respuesta>{
    const url = `${this.url}/accionarLuz/${id}`;
    return this._httpClient.get(url).pipe(
      map(
        (datos)=>{
          return datos as Respuesta;
        }
      )
    );
  }


  apagar(id:number):Observable<Respuesta>{
    const url = `${this.url}/apagarLuz/${id}`;
    return this._httpClient.get(url).pipe(
      map(
        (datos)=>{
          return datos as Respuesta;
        }
      )
    );
  }

  buscarParametro(filtro:any):Observable<Luz[]>{
    const  url = `${this.url}?where=`+JSON.stringify(filtro);
    console.log(url);
    return this._httpClient.get(url).pipe(
      map(
        (datos)=>{
          return datos as Luz[];
        }
      )
    );
  }




}

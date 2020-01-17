import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  url = 'http://localhost:1337'; //sails
  arregloTendencias2 = [];

  buscar = 'Buscar en Twitter';
/*
  arregloTendencias = [
    {
      numero: '1 - Tendencias globales',
      tema: 'QUESTIONARIO PARA 2020',
      tweets: '20,9 mil Tweets'
    },
    {
      numero: '2 - Tendencias globales',
      tema: '#LIVSHU',
      tweets: '50,2 mil Tweets'
    },
    {
      numero: '3 - Tendencias globales',
      tema: '#SelenialsRare',
      tweets: '54,9 mil Tweets'
    },
    {
      numero: '4 - Tendencias globales',
      tema: '#Dracula',
      tweets: '24,8 mil Tweets'
    },
    {
      numero: '5 - Tendencias globales',
      tema: 'Revilla',
      tweets: '22,4 mil Tweets'
    },
    {
      numero: '6 - Tendencias globales',
      tema: 'Teruel',
      tweets: '22 mil Tweets'
    },
    {
      numero: '7 - Tendencias globales',
      tema: '#MasterChefIt',
      tweets: '5,850 Tweets'
    },
    {
      numero: '8 - Tendencias globales',
      tema: '#YummyOutTONIGHT',
      tweets: '124 mil Tweets'
    },
    {
      numero: '9 - Tendencias globales',
      tema: 'Sam Wyche',
      tweets: '7,443 Tweets'
    },
    {
      numero: '10 - Tendencias globales',
      tema: 'Rooney',
      tweets: '22,6 mil Tweets'
    }
  ];
*/
  constructor(
      private readonly _httpClient: HttpClient
  ){
    //CASI NUNCA HACER CONFIGURACIONES
  }



  ngOnInit(): void {

    const urlTendencias = this.url + '/tendencia'; //sails
    // $ -> Observable

    const tendencias$ = this._httpClient.get(
        urlTendencias
    );

    tendencias$
        .subscribe(
            (tendencias: any[])=>{ //TRY
              console.log('Tendencia: ', tendencias);
              this.arregloTendencias2 = tendencias
            },
            (error)=>{ // CATCH
              console.error({
                error: error,
                mensaje: 'Error consultando tendencias'
              })
            }


        );

  }

}






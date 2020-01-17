import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  url = 'http://localhost:1337'; //sails
  arregloTweets2 = [];

  imagen = [{
    fotoPerfil: 'https://pbs.twimg.com/profile_images/1117604340288688128/jC_tbMrr_bigger.png',
  }];
/*
  arregloTweets = [
    {
      perfil: 'https://pbs.twimg.com/profile_images/984857614247919616/V7z-khzu_400x400.jpg',
      nombre: 'El Comercio',
      usuario: '@elcomerciocom',
      tiempo: '1h',
      texto: 'La década presenció un importante desarrollo de la inteligencia artificial, pero todavía está en debate si servirá para mejorar las condiciones de vida de la humanidad o si abrirá más brechas',
      imagen: 'https://pbs.twimg.com/media/EM_A4GQXYAUOBTa?format=jpg&name=small',
      comentarios: '10',
      retweets: '5',
      gusta: '15'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1202307923243937793/5HkP2RTg_400x400.jpg',
      nombre: 'Ecuavisa',
      usuario: '@ecuavisa',
      tiempo: '28 dic',
      texto: '¡IMPRESIONANTE! #Youtubers provocan una gigantesca explosión de espuma que inunda todo un patio en #EEUU.',
      imagen: 'https://pbs.twimg.com/media/EM6FJMpXsAE4PbU?format=jpg&name=small',
      comentarios: '1',
      retweets: '11',
      gusta: '15'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1212398377553412096/HaWAuh90_400x400.jpg',
      nombre: 'Pokemon',
      usuario: '@Pokemon',
      tiempo: '20 dic',
      texto: 'So you’ve become the Champion of the Galar region—why not take on the entire world in Ranked Battles next? \n' +
          '\n' +
          'Learn how to raid, battle, and hatch your way to having a team worthy of the Master Ball Tier: \n' +
          'http://bit.ly/35Gd4Bq',
      imagen: 'https://pbs.twimg.com/media/EMQV9CSWkAAwnrL?format=jpg&name=small',
      comentarios: '235',
      retweets: '425',
      gusta: '4,0 mil'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1185193609102057472/VgqVmDgX_400x400.jpg',
      nombre: 'Cartoon Network',
      usuario: '@cartoonnetwork',
      tiempo: '23h',
      texto: 'We wish you a beary merry holidays! Look for these adorable stickers on GIPHY by searching "We Bare Bears"\n' +
          '\n' +
          '#WeBareBears',
      imagen: 'https://pbs.twimg.com/media/EMlln-AX0AEWEgK?format=jpg&name=360x360',
      comentarios: '100',
      retweets: '404',
      gusta: '1,6 mil'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1205226947346722817/veJLfnPs_400x400.jpg',
      nombre: 'Elon Musk',
      usuario: '@elonmusk',
      tiempo: '2h',
      texto: 'Dam now rly want choc chip muffin',
      imagen: 'https://pbs.twimg.com/media/EM_Q-JhXUAAeQYD?format=jpg&name=small',
      comentarios: '1,5 mil',
      retweets: '7,1 mil',
      gusta: '56,3 mil'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1073607078109949957/74oimLX4_400x400.jpg',
      nombre: 'UEFA Champions League',
      usuario: '@ChampionsLeague',
      tiempo: '8h',
      texto: 'First player you think of?',
      imagen: 'https://pbs.twimg.com/media/EL_jIR7XYAAnxJ8?format=jpg&name=small',
      comentarios: '156',
      retweets: '309',
      gusta: '7,8 mil'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1016849978642186240/_AbJ7V5b_400x400.jpg',
      nombre: 'Walt Disney Studios',
      usuario: '@DisneyStudios',
      tiempo: '28 dic',
      texto: 'See \n' +
          '@StarWars\n' +
          ': #TheRiseOfSkywalker now playing in theaters! Get tickets: http://fandango.com/TheRiseOfSkywalker',
      imagen: 'https://pbs.twimg.com/media/EMsCcsbUcAAlP1C?format=jpg&name=small',
      comentarios: '298',
      retweets: '40',
      gusta: '460'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1200525230239879168/Kb3JplK5_400x400.jpg',
      nombre: 'Nickelodeon',
      usuario: '@Nickelodeon',
      tiempo: '25 dic',
      texto: 'merry christmas from the bikini bottom of our hearts',
      imagen: 'https://pbs.twimg.com/media/EMprAkjXsAISEWX?format=jpg&name=small',
      comentarios: '14',
      retweets: '164',
      gusta: '759'
    }
  ];
*/


  constructor(
      private readonly _httpClient: HttpClient
  ){
    //CASI NUNCA HACER CONFIGURACIONES
  }



  ngOnInit(): void {

    const urlTweets = this.url + '/tweet'; //sails
    // $ -> Observable

    const tweets$ = this._httpClient.get(
        urlTweets
    );

    tweets$
        .subscribe(
            (tweets: any[])=>{ //TRY
              console.log('Tweets: ', tweets);
              this.arregloTweets2 = tweets
            },
            (error)=>{ // CATCH
              console.error({
                error: error,
                mensaje: 'Error consultando tweets'
              })
            }


        );

  }

}





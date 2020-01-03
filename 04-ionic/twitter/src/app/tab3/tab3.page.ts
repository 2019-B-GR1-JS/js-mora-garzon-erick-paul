import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  arregloNotificaciones = [
    {
      perfil: 'https://pbs.twimg.com/profile_images/984857614247919616/V7z-khzu_400x400.jpg',
      tipo: 'Tweet reciente',
      texto: '#VIDEO | Luto en ‘Friends’ por muerte de Allee Willis » http://bit.ly/MureFrinds'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1205650147352416256/mRSusjRN_400x400.jpg',
      tipo: 'Recomendaciones para ti',
      texto: 'Los “piropos” no son inofensivos\n' +
          '\n' +
          'Es más grave si viene de un agente estatal\n' +
          '\n' +
          'A toda la \n' +
          '@PoliciaEcuador\n' +
          ' le será recordado que este comportamiento es inaceptable. Si queremos sociedades más seguras ¡debemos luchar contra todas las violencias!\n' +
          '\n' +
          'Mil disculpas \n' +
          '@caathytorres'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1184815382475038720/xoPGKybX_400x400.jpg',
      tipo: 'Recomendaciones para ti',
      texto: 'No habrá Nochebuena si falta un padre, una madre o hijos, por haber sido asesinados por el gobierno de facto de Áñez. No habrá paz ni amor mientras no retorne la libertad y democracia, ni Navidad con asilados y perseguidos. Un abrazo a las familias de nuestra Patria.'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1155596106895675395/lS0psRtd_400x400.jpg',
      tipo: 'Recomendaciones para ti',
      texto: 'Sobre los jugadores ecuatorianos de cada década, salvo mejores criterios, me permitiría clasificarlos asi:\n' +
          'Los 60: A. Spencer\n' +
          'Los 70: Ítalo Estupiñán\n' +
          'Los 80: Holger Quiñonez\n' +
          'Los 90: Alex Aguinaga\n' +
          'Los 2000: Edison Méndez\n' +
          'Los 2010: Antonio Valencia.'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1182993647740030976/g_5WmY5w_400x400.jpg',
      tipo: '',
      texto: 'Sandra Sánchez - Kushi comenzó a seguir a Cristina Acuña Bermeo'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/984857614247919616/V7z-khzu_400x400.jpg',
      tipo: 'Tweet reciente',
      texto: '#URGENTE | El Pleno de la Asamblea Nacional aprueba la Ley Tributaria con 83 votos » http://bit.ly/AprobLeyTributr https://pic.twitter.com/Up0vraJQav'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1182993647740030976/g_5WmY5w_400x400.jpg',
      tipo: 'Sandra Sánchez - Kushi\n' +
          ' indicó que le gustan 2 de tus Tweets',
      texto: 'Las técnicas de pruebas de caja negra y de caja blanca requieren de la ejecución de código porque son pruebas de software dinámicas.\n' +
          '@KushiRimay #SW_Quality_Security'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1211261825179934720/6qEQqu6n_400x400.jpg',
      tipo: '',
      texto: 'Myriam Hernández A. te siguió'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/1114903872449974274/FxAl7TTU_400x400.png',
      tipo: 'Marco Silva-Ramos\n' +
          ' retwitteó tu Tweet',
      texto: 'El enfoque PDCA consiste en un ciclo iterativo con el objetivo de la mejora continua de 4 etapas: Planificar-Hacer-Verificar-Actuar o Plan-Do-Check-Act por sus siglas en inglés. \n' +
          '#SW_Quality_Security @KushiRimay'
    },
    {
      perfil: 'https://pbs.twimg.com/profile_images/984857614247919616/V7z-khzu_400x400.jpg',
      tipo: 'Tweet reciente',
      texto: '#URGENTE | Se revoca la prisión preventiva de Paola Pabón, Virgilio Hernández y Christian González.\n' +
          'La presidenta subrogante de la Corte de Justicia de Pichincha, Patlova Guerra, dispuso este 24 de diciembre su libertad; deberán presentarse periódicamente ante la Justicia https://pic.twitter.com/9Nt7C1jM1I'
    }
  ];

}

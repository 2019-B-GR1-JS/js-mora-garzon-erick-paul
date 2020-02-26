import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaGestionUsuariosComponent} from "./rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaCrearUsuarioComponent} from "./rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarUsuarioComponent} from "./rutas/ruta-editar-usuario/ruta-editar-usuario.component";
import {RutaGestionLucesComponent} from "./rutas/ruta-gestion-luces/ruta-gestion-luces.component";
import {RutaGestionPisosComponent} from "./rutas/ruta-gestion-pisos/ruta-gestion-pisos.component";
import {RutaCrearPisoComponent} from "./rutas/ruta-crear-piso/ruta-crear-piso.component";
import {RutaEditarPisoComponent} from "./rutas/ruta-editar-piso/ruta-editar-piso.component";
import {RutaGestionHabitacionesComponent} from "./rutas/ruta-gestion-habitaciones/ruta-gestion-habitaciones.component";
import {RutaCrearHabitacionComponent} from "./rutas/ruta-crear-habitacion/ruta-crear-habitacion.component";
import {RutaEditarHabitacionComponent} from "./rutas/ruta-editar-habitacion/ruta-editar-habitacion.component";
import {RutaCrearLuzComponent} from "./rutas/ruta-crear-luz/ruta-crear-luz.component";
import {RutaEditarLuzComponent} from "./rutas/ruta-editar-luz/ruta-editar-luz.component";
import {EstaLogeadoPolicy} from "./services/auth/politicas/esta-logeado.policy";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'menu',
    component: RutaMenuComponent,
    canActivate: [
      EstaLogeadoPolicy//,
      //EsAdministradorPolicy
    ]
  },
  {
    path: 'menu/gestion-usuarios',
    component: RutaGestionUsuariosComponent,
    children: [
      {
        path: 'registrar-usuario',
        component: RutaCrearUsuarioComponent

      },
      {
        path: 'actualizar-usuario/:idUsuario',
        component: RutaEditarUsuarioComponent
      }
    ],
    canActivate: [
      EstaLogeadoPolicy//,
      //EsAdministradorPolicy
    ]
  },
  {
    path: 'menu/gestion-luces',
    component: RutaGestionLucesComponent,
    children: [
      {
        path: 'registrar-luz',
        component: RutaCrearLuzComponent
      },
      {
        path: 'actualizar-luz/:idLuz',
        component: RutaEditarLuzComponent
      }
    ],
    canActivate: [
      EstaLogeadoPolicy//,
      //EsAdministradorPolicy
    ]
  },
  {
    path: 'menu/gestion-pisos',
    component: RutaGestionPisosComponent,
    children: [
      {
        path: 'registrar-piso',
        component: RutaCrearPisoComponent
      },
      {
        path: 'actualizar-piso/:idPiso',
        component: RutaEditarPisoComponent
      }
    ],
    canActivate: [
      EstaLogeadoPolicy//,
      //EsAdministradorPolicy
    ]
  },
  {
    path: 'menu/gestion-habitaciones',
    component: RutaGestionHabitacionesComponent,
    children: [
      {
        path: 'registrar-habitacion',
        component: RutaCrearHabitacionComponent
      },
      {
        path: 'actualizar-habitacion/:idHabitacion',
        component: RutaEditarHabitacionComponent
      }
    ],
    canActivate: [
      EstaLogeadoPolicy//,
      //EsAdministradorPolicy
    ]
  },

  {
    path: 'menu/gestion-pisos/:idPiso/gestion-habitaciones',
    component: RutaGestionHabitacionesComponent,
    children:[
      /*{ //inicio/gestion-usuarios/gestion-libros/buscar
        path: 'buscar',
        component: RutaBuscarLibroComponent
      },*/
      {
        path: 'registrar-habitacion',
        component: RutaCrearHabitacionComponent
      },
      {
        path: 'actualizar-habitacion/:idHabitacion',
        component: RutaEditarHabitacionComponent
      }
    ],
    canActivate: [
      EstaLogeadoPolicy//,
      //EsAdministradorPolicy
    ]
  },
  {
    path: 'menu/gestion-habitaciones/:idHabitacion/gestion-luces',
    component: RutaGestionLucesComponent,
    children:[
      /*{ //inicio/gestion-usuarios/gestion-libros/buscar
        path: 'buscar',
        component: RutaBuscarLibroComponent
      },*/
      {
        path: 'registrar-luz',
        component: RutaCrearLuzComponent
      },
      {
        path: 'actualizar-luz/:idLuz',
        component: RutaEditarLuzComponent
      }
    ],
    canActivate: [
      EstaLogeadoPolicy//,
      //EsAdministradorPolicy
    ]
  },
  {
    path: 'inicio',
    component: RutaInicioComponent,
  }//,
  /*{

    path: 'menu',
    component: RutaMenuComponent,
    children: [
      {
        path: 'notificaciones',
        component: RutaNotificacionesComponent
      },
      {
        path: 'acciones',
        component: RutaAccionesComponent
      }
    ]


  }*///,
  /*{
    path: '**',
    redirectTo: 'no-encontrado'
  },
  {
    path:'no-encontrado',
    component: Ruta404Component
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

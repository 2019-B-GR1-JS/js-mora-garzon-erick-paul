import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaPacienteComponent} from "./rutas/ruta-paciente/ruta-paciente.component";
import {RutaMedicamentoComponent} from "./rutas/ruta-medicamento/ruta-medicamento.component";
import {RutaTiendaComponent} from "./rutas/ruta-tienda/ruta-tienda.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {EstaLogueadoAdminPolicy} from "./services/auth/politicas/esta-logeado-admin.policy";
import {EstaLogueadoPolicy} from "./services/auth/politicas/esta-logeado.policy";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'paciente',
    component: RutaPacienteComponent,
    canActivate: [
      EstaLogueadoAdminPolicy
    ]
  },
  {
    path: 'paciente/:idPaciente/medicamento',
    component: RutaMedicamentoComponent,
    canActivate: [
      EstaLogueadoAdminPolicy
    ]
  },
  {
    path: 'tienda',
    component: RutaTiendaComponent,
    canActivate: [
      EstaLogueadoPolicy
    ]
  },
  {
    path: 'usuario',
    component: RutaUsuarioComponent,
    canActivate: [
      EstaLogueadoPolicy
    ]
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import { ModalEditarUsuarioComponent } from './modales/modal-editar-usuario/modal-editar-usuario.component';
import { ModalEditarHabitacionComponent } from './modales/modal-editar-habitacion/modal-editar-habitacion.component';
import { ModalEditarPisoComponent } from './modales/modal-editar-piso/modal-editar-piso.component';
import { ModalEditarTipoHabitComponent } from './modales/modal-editar-tipo-habit/modal-editar-tipo-habit.component';
import { ModalEditarLuzComponent } from './modales/modal-editar-luz/modal-editar-luz.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionHabitacionesComponent } from './rutas/ruta-gestion-habitaciones/ruta-gestion-habitaciones.component';
import { RutaGestionPisosComponent } from './rutas/ruta-gestion-pisos/ruta-gestion-pisos.component';
import { RutaGestionTipoHabitComponent } from './rutas/ruta-gestion-tipo-habit/ruta-gestion-tipo-habit.component';
import { RutaGestionLucesComponent } from './rutas/ruta-gestion-luces/ruta-gestion-luces.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaCrearHabitacionComponent } from './rutas/ruta-crear-habitacion/ruta-crear-habitacion.component';
import { RutaCrearLuzComponent } from './rutas/ruta-crear-luz/ruta-crear-luz.component';
import { RutaCrearPisoComponent } from './rutas/ruta-crear-piso/ruta-crear-piso.component';
import { RutaCrearTipoHabitComponent } from './rutas/ruta-crear-tipo-habit/ruta-crear-tipo-habit.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalEditarUsuarioComponent,
    ModalEditarHabitacionComponent,
    ModalEditarPisoComponent,
    ModalEditarTipoHabitComponent,
    ModalEditarLuzComponent,
    ModalLoginComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaGestionUsuariosComponent,
    RutaGestionHabitacionesComponent,
    RutaGestionPisosComponent,
    RutaGestionTipoHabitComponent,
    RutaGestionLucesComponent,
    RutaCrearUsuarioComponent,
    RutaCrearHabitacionComponent,
    RutaCrearLuzComponent,
    RutaCrearPisoComponent,
    RutaCrearTipoHabitComponent,
    RutaMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

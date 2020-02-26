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
import {ButtonModule, CardModule, MessageModule, PanelMenuModule, TabMenuModule} from "primeng";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import { ModalEditarUsuarioComponent } from './modales/modal-editar-usuario/modal-editar-usuario.component';
import { ModalEditarHabitacionComponent } from './modales/modal-editar-habitacion/modal-editar-habitacion.component';
import { ModalEditarPisoComponent } from './modales/modal-editar-piso/modal-editar-piso.component';
import { ModalEditarLuzComponent } from './modales/modal-editar-luz/modal-editar-luz.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionHabitacionesComponent } from './rutas/ruta-gestion-habitaciones/ruta-gestion-habitaciones.component';
import { RutaGestionPisosComponent } from './rutas/ruta-gestion-pisos/ruta-gestion-pisos.component';
import { RutaGestionLucesComponent } from './rutas/ruta-gestion-luces/ruta-gestion-luces.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaCrearHabitacionComponent } from './rutas/ruta-crear-habitacion/ruta-crear-habitacion.component';
import { RutaCrearLuzComponent } from './rutas/ruta-crear-luz/ruta-crear-luz.component';
import { RutaCrearPisoComponent } from './rutas/ruta-crear-piso/ruta-crear-piso.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaEditarHabitacionComponent } from './rutas/ruta-editar-habitacion/ruta-editar-habitacion.component';
import { RutaEditarLuzComponent } from './rutas/ruta-editar-luz/ruta-editar-luz.component';
import { RutaEditarPisoComponent } from './rutas/ruta-editar-piso/ruta-editar-piso.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import {AuthService} from "./services/auth/auth.service";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {PisoRestService} from "./services/rest/piso-rest.service";
import {HabitacionRestService} from "./services/rest/habitacion-rest.service";
import { ModalCrearUsuarioComponent } from './modales/modal-crear-usuario/modal-crear-usuario.component';
import { ModalCrearHabitacionComponent } from './modales/modal-crear-habitacion/modal-crear-habitacion.component';
import { ModalCrearPisoComponent } from './modales/modal-crear-piso/modal-crear-piso.component';
import { ModalCrearLuzComponent } from './modales/modal-crear-luz/modal-crear-luz.component';
import {LuzRestService} from "./services/rest/luz-rest.service";
import {LedRestService} from "./services/rest/led-rest.service";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    ModalEditarUsuarioComponent,
    ModalEditarHabitacionComponent,
    ModalEditarPisoComponent,
    ModalEditarLuzComponent,
    ModalLoginComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaGestionUsuariosComponent,
    RutaGestionHabitacionesComponent,
    RutaGestionPisosComponent,
    RutaGestionLucesComponent,
    RutaCrearUsuarioComponent,
    RutaCrearHabitacionComponent,
    RutaCrearLuzComponent,
    RutaCrearPisoComponent,
    RutaMenuComponent,
    RutaEditarHabitacionComponent,
    RutaEditarLuzComponent,
    RutaEditarPisoComponent,
    RutaEditarUsuarioComponent,
    ModalCrearUsuarioComponent,
    ModalCrearHabitacionComponent,
    ModalCrearPisoComponent,
    ModalCrearLuzComponent
  ],

  entryComponents:[
    ModalEditarUsuarioComponent,
    ModalEditarHabitacionComponent,
    ModalEditarLuzComponent,
    ModalEditarPisoComponent,
    ModalLoginComponent
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
    MatDialogModule,
    TabMenuModule,
    MessageModule,
    PanelMenuModule,
    MatSlideToggleModule,
    CardModule
  ],
  providers: [
    UsuarioRestService,
    AuthService,
    PisoRestService,
    HabitacionRestService,
    LuzRestService,
    LedRestService
    //TipoHabitRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

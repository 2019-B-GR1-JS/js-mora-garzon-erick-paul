import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalEditarUsuarioComponent } from './modales/modal-editar-usuario/modal-editar-usuario.component';
import { ModalEditarPacienteComponent } from './modales/modal-editar-paciente/modal-editar-paciente.component';
import { ModalEditarMedicamentoComponent } from './modales/modal-editar-medicamento/modal-editar-medicamento.component';
import { ModalRegistrarUsuarioComponent } from './modales/modal-registrar-usuario/modal-registrar-usuario.component';
import { ModalSeleccionarMedicamentoComponent } from './modales/modal-seleccionar-medicamento/modal-seleccionar-medicamento.component';
import { ModalVisualizarCompraComponent } from './modales/modal-visualizar-compra/modal-visualizar-compra.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaPacienteComponent } from './rutas/ruta-paciente/ruta-paciente.component';
import { RutaMedicamentoComponent } from './rutas/ruta-medicamento/ruta-medicamento.component';
import { RutaTiendaComponent } from './rutas/ruta-tienda/ruta-tienda.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule, CardModule, PanelMenuModule, PanelModule, TableModule, TabViewModule} from "primeng";
import {MatDialogModule} from "@angular/material/dialog";
import {AuthService} from "./services/auth/auth.service";
import {UsuarioRestService} from "./services/usuario-rest.service";
import {PacienteRestService} from "./services/paciente-rest.service";
import {MedicamentoRestService} from "./services/medicamento-rest.service";

@NgModule({
  declarations: [
    AppComponent,
    ModalEditarUsuarioComponent,
    ModalEditarPacienteComponent,
    ModalEditarMedicamentoComponent,
    ModalRegistrarUsuarioComponent,
    ModalSeleccionarMedicamentoComponent,
    ModalVisualizarCompraComponent,
    RutaLoginComponent,
    RutaPacienteComponent,
    RutaMedicamentoComponent,
    RutaTiendaComponent,
    RutaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    TabViewModule,
    PanelModule,
    CardModule,
    PanelMenuModule
  ],
  providers: [
    AuthService,
    UsuarioRestService,
    PacienteRestService,
    MedicamentoRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

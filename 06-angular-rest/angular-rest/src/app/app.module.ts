import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import { ModalEditarUsuarioComponent } from './modales/modal-editar-usuario/modal-editar-usuario.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ModalEditarUsuarioComponent
  ],

  entryComponents:[
    ModalEditarUsuarioComponent
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
    // -> HTTP
  ],
  providers: [
    UsuarioRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

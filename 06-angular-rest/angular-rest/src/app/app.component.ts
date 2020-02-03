import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "util";
import { FILAS } from './constantes/numero-filas-por-tabla';
import {MatDialog} from "@angular/material/dialog";
import {ModalEditarUsuarioComponent} from "./modales/modal-editar-usuario/modal-editar-usuario.component";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {AuthService} from "./services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly _authService:AuthService) {
  }

  ngOnInit() {
  }
}



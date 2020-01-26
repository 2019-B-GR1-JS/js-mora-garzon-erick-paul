import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionPisosComponent } from './ruta-gestion-pisos.component';

describe('RutaGestionPisosComponent', () => {
  let component: RutaGestionPisosComponent;
  let fixture: ComponentFixture<RutaGestionPisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionPisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionPisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

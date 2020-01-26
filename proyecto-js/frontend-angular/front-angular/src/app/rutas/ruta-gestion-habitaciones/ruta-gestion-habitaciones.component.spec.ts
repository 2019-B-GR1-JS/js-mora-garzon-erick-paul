import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionHabitacionesComponent } from './ruta-gestion-habitaciones.component';

describe('RutaGestionHabitacionesComponent', () => {
  let component: RutaGestionHabitacionesComponent;
  let fixture: ComponentFixture<RutaGestionHabitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionHabitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

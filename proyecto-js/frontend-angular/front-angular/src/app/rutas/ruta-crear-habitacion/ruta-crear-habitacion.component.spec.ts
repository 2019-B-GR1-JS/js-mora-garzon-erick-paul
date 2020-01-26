import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearHabitacionComponent } from './ruta-crear-habitacion.component';

describe('RutaCrearHabitacionComponent', () => {
  let component: RutaCrearHabitacionComponent;
  let fixture: ComponentFixture<RutaCrearHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

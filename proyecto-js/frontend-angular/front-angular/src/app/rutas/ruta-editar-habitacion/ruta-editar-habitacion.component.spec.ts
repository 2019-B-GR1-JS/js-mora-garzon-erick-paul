import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarHabitacionComponent } from './ruta-editar-habitacion.component';

describe('RutaEditarHabitacionComponent', () => {
  let component: RutaEditarHabitacionComponent;
  let fixture: ComponentFixture<RutaEditarHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

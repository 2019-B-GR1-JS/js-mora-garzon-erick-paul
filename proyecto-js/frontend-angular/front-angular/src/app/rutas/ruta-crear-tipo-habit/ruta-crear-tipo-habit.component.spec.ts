import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearTipoHabitComponent } from './ruta-crear-tipo-habit.component';

describe('RutaCrearTipoHabitComponent', () => {
  let component: RutaCrearTipoHabitComponent;
  let fixture: ComponentFixture<RutaCrearTipoHabitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearTipoHabitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearTipoHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

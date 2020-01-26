import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionTipoHabitComponent } from './ruta-gestion-tipo-habit.component';

describe('RutaGestionTipoHabitComponent', () => {
  let component: RutaGestionTipoHabitComponent;
  let fixture: ComponentFixture<RutaGestionTipoHabitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionTipoHabitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionTipoHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarTipoHabitComponent } from './modal-editar-tipo-habit.component';

describe('ModalEditarTipoHabitComponent', () => {
  let component: ModalEditarTipoHabitComponent;
  let fixture: ComponentFixture<ModalEditarTipoHabitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarTipoHabitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarTipoHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

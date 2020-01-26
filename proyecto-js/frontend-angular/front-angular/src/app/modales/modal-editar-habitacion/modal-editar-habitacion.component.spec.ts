import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarHabitacionComponent } from './modal-editar-habitacion.component';

describe('ModalEditarHabitacionComponent', () => {
  let component: ModalEditarHabitacionComponent;
  let fixture: ComponentFixture<ModalEditarHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearHabitacionComponent } from './modal-crear-habitacion.component';

describe('ModalCrearHabitacionComponent', () => {
  let component: ModalCrearHabitacionComponent;
  let fixture: ComponentFixture<ModalCrearHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSeleccionarMedicamentoComponent } from './modal-seleccionar-medicamento.component';

describe('ModalSeleccionarMedicamentoComponent', () => {
  let component: ModalSeleccionarMedicamentoComponent;
  let fixture: ComponentFixture<ModalSeleccionarMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSeleccionarMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSeleccionarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

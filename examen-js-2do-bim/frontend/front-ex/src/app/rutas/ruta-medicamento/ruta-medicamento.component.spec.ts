import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMedicamentoComponent } from './ruta-medicamento.component';

describe('RutaMedicamentoComponent', () => {
  let component: RutaMedicamentoComponent;
  let fixture: ComponentFixture<RutaMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

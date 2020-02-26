import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPacienteComponent } from './ruta-paciente.component';

describe('RutaPacienteComponent', () => {
  let component: RutaPacienteComponent;
  let fixture: ComponentFixture<RutaPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

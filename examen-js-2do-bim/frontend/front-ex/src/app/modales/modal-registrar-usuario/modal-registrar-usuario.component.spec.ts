import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrarUsuarioComponent } from './modal-registrar-usuario.component';

describe('ModalRegistrarUsuarioComponent', () => {
  let component: ModalRegistrarUsuarioComponent;
  let fixture: ComponentFixture<ModalRegistrarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRegistrarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegistrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

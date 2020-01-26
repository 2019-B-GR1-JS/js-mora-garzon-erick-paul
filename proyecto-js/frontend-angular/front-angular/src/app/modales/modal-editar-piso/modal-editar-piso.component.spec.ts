import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPisoComponent } from './modal-editar-piso.component';

describe('ModalEditarPisoComponent', () => {
  let component: ModalEditarPisoComponent;
  let fixture: ComponentFixture<ModalEditarPisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarPisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarPisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

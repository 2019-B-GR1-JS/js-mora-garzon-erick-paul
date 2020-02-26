import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearPisoComponent } from './modal-crear-piso.component';

describe('ModalCrearPisoComponent', () => {
  let component: ModalCrearPisoComponent;
  let fixture: ComponentFixture<ModalCrearPisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearPisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearPisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

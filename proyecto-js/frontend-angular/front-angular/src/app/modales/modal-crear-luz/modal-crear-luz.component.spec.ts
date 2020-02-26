import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearLuzComponent } from './modal-crear-luz.component';

describe('ModalCrearLuzComponent', () => {
  let component: ModalCrearLuzComponent;
  let fixture: ComponentFixture<ModalCrearLuzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearLuzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

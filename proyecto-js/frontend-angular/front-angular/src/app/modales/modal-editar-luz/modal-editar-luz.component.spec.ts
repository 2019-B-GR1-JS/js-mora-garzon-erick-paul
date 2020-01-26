import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarLuzComponent } from './modal-editar-luz.component';

describe('ModalEditarLuzComponent', () => {
  let component: ModalEditarLuzComponent;
  let fixture: ComponentFixture<ModalEditarLuzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarLuzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

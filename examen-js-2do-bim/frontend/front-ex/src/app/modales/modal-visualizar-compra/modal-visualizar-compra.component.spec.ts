import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVisualizarCompraComponent } from './modal-visualizar-compra.component';

describe('ModalVisualizarCompraComponent', () => {
  let component: ModalVisualizarCompraComponent;
  let fixture: ComponentFixture<ModalVisualizarCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVisualizarCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVisualizarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

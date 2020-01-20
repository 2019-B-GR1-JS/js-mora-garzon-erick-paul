import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarLibroComponent } from './ruta-editar-libro.component';

describe('RutaEditarLibroComponent', () => {
  let component: RutaEditarLibroComponent;
  let fixture: ComponentFixture<RutaEditarLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

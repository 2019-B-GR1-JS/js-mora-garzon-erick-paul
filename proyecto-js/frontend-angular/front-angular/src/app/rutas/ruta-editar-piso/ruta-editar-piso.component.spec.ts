import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarPisoComponent } from './ruta-editar-piso.component';

describe('RutaEditarPisoComponent', () => {
  let component: RutaEditarPisoComponent;
  let fixture: ComponentFixture<RutaEditarPisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarPisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarPisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

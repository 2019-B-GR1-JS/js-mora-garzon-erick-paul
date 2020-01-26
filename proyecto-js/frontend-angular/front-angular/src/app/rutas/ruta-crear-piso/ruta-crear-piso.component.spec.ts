import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearPisoComponent } from './ruta-crear-piso.component';

describe('RutaCrearPisoComponent', () => {
  let component: RutaCrearPisoComponent;
  let fixture: ComponentFixture<RutaCrearPisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearPisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearPisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

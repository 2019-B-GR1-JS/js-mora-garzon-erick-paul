import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearLuzComponent } from './ruta-crear-luz.component';

describe('RutaCrearLuzComponent', () => {
  let component: RutaCrearLuzComponent;
  let fixture: ComponentFixture<RutaCrearLuzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearLuzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

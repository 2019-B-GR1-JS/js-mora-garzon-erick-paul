import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionLucesComponent } from './ruta-gestion-luces.component';

describe('RutaGestionLucesComponent', () => {
  let component: RutaGestionLucesComponent;
  let fixture: ComponentFixture<RutaGestionLucesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionLucesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionLucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

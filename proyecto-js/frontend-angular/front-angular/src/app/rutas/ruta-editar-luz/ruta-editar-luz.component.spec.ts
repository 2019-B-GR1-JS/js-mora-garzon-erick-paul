import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarLuzComponent } from './ruta-editar-luz.component';

describe('RutaEditarLuzComponent', () => {
  let component: RutaEditarLuzComponent;
  let fixture: ComponentFixture<RutaEditarLuzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarLuzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

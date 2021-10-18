import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeCotizacionesComponent } from './gestion-de-cotizaciones.component';

describe('GestionDeCotizacionesComponent', () => {
  let component: GestionDeCotizacionesComponent;
  let fixture: ComponentFixture<GestionDeCotizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeCotizacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

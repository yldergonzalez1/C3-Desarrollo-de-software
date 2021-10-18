import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeFacturacionComponent } from './gestion-de-facturacion.component';

describe('GestionDeFacturacionComponent', () => {
  let component: GestionDeFacturacionComponent;
  let fixture: ComponentFixture<GestionDeFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeFacturacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

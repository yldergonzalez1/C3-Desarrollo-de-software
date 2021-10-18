import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeUsuariosInicioDeSesionComponent } from './gestion-de-usuarios-inicio-de-sesion.component';

describe('GestionDeUsuariosInicioDeSesionComponent', () => {
  let component: GestionDeUsuariosInicioDeSesionComponent;
  let fixture: ComponentFixture<GestionDeUsuariosInicioDeSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeUsuariosInicioDeSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeUsuariosInicioDeSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

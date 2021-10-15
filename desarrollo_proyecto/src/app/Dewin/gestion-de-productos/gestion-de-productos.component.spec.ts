import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeProductosComponent } from './gestion-de-productos.component';

describe('GestionDeProductosComponent', () => {
  let component: GestionDeProductosComponent;
  let fixture: ComponentFixture<GestionDeProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

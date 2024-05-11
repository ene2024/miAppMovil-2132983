import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesPaquetesPage } from './detalles-paquetes.page';

describe('DetallesPaquetesPage', () => {
  let component: DetallesPaquetesPage;
  let fixture: ComponentFixture<DetallesPaquetesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallesPaquetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

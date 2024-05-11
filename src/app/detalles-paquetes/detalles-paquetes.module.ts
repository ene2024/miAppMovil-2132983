import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPaquetesPageRoutingModule } from './detalles-paquetes-routing.module';

import { DetallesPaquetesPage } from './detalles-paquetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPaquetesPageRoutingModule
  ],
  declarations: [DetallesPaquetesPage]
})
export class DetallesPaquetesPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesPaquetesPage } from './detalles-paquetes.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPaquetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPaquetesPageRoutingModule {}

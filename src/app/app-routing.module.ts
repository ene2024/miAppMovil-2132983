import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tareas',
    pathMatch: 'full'
  },
  {
    path: 'tareas',
    loadChildren: () => import('./tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'agregar-tarea',
    loadChildren: () => import('./agregar-tarea/agregar-tarea.module').then( m => m.AgregarTareaPageModule)
  },
  {
    path: 'tareas/:id',
    loadChildren: () => import('./detalles-paquetes/detalles-paquetes.module').then( m => m.DetallesPaquetesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

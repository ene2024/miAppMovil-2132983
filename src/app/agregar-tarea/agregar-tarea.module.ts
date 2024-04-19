import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTareaPageRoutingModule } from './agregar-tarea-routing.module';

import { AgregarTareaPage } from './agregar-tarea.page';
import { TareasPage } from '../tareas/tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTareaPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [],
})
export class AgregarTareaPageModule {}

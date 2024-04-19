import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AgregarTareaPage } from './agregar-tarea/agregar-tarea.page';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TareasPage } from './tareas/tareas.page';

@NgModule({
  declarations: [AppComponent, AgregarTareaPage, TareasPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component/lista.component';



@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule
  ],
  exports:[ListaComponent]
})
export class ComponentsModule { }
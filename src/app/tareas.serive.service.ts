import { Injectable } from '@angular/core';
import { postInfo } from './tareas/tareas.page';

@Injectable({
  providedIn: 'root'
})
export class TareasSeriveService {

  constructor() { }

  tareas:postInfo []= [{title: "Llevar a Bruno al veterinario", date: "05/24", desc: "Hello world!"}, 
  {title: "Recordar tarea de Aplicaciones Móviles", date:"05/24", desc: "Hello world!"}];

  Agregar(input: postInfo){
    this.tareas.push(input);
  }

  Get(){
    return this.tareas;
  }

  Delete(index:number){
    this.tareas.splice(index,1);
  }

}

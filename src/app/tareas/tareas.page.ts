import { Component, OnInit } from '@angular/core';
import { IonPopover, PopoverController } from '@ionic/angular';
import { ViewChild } from '@angular/core';


interface postInfo{
  title: string;
  date: string;
  desc: string;
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})


export class TareasPage{

  constructor(public popoverController: PopoverController) { }

  postInfo: postInfo [] = [{title: "Llevar a Bruno al veterinario", date: "05/24", desc: "Hello world!"}, 
  {title: "Recordar tarea de Aplicaciones Móviles", date:"05/24", desc: "Hello world!"}];


}

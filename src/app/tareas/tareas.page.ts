import { Component, OnInit } from '@angular/core';
import { IonPopover, PopoverController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { service } from '../service';


export interface postInfo{
  title: string;
  date: string;
  desc: string;
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})


export class TareasPage implements OnInit{

  constructor(private popoverController: PopoverController, private router:Router, public service: service) { }

  ngOnInit(){
  }

  //postInfo: postInfo [] = [{title: "Llevar a Bruno al veterinario", date: "05/24", desc: "Hello world!"}, 
  //{title: "Recordar tarea de Aplicaciones Móviles", date:"05/24", desc: "Hello world!"}];

  agregarTarea() {
    this.router.navigate(['/agregar-tarea']);
    
  }
}

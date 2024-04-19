import { Component, OnInit } from '@angular/core';
import { IonModal, IonPopover, PopoverController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core/components';


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

  constructor() { }



  

  ngOnInit(){
  }

  postInfo: postInfo [] = [{title: "Llevar a Bruno al veterinario", date: "05/24", desc: "Hello world!"}, 
  {title: "Recordar tarea de Aplicaciones Móviles", date:"05/24", desc: "Hello world!"}];

  isModalOpen:boolean = false;
  canDismiss:boolean= false;


  registrarTarea($event: FormGroup){


    let month = $event.value.month;

    if(month.length == 1){
        month = '0' + month;
    }

    this.postInfo.push({
        title: $event.value.title,
        date: month + '/' + $event.value.year.substring(2),
        desc: $event.value.desc,
    })

    this.setCanDismiss(true);
    this.setIsModalOpen(false);

  }

  cancelarForm(){
    this.setCanDismiss(true);
    this.setIsModalOpen(false);
  }

  setIsModalOpen(set: boolean){
    this.isModalOpen = set;
  }

  setCanDismiss(set: boolean){
    this.canDismiss=set;
  }

  openForm(){
    this.setIsModalOpen(true);
    this.setCanDismiss(false);
  }


}

import { Component, OnInit } from '@angular/core';
import { IonModal, IonPopover, PopoverController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core/components';
import { TareasSeriveService } from '../tareas.serive.service';


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

  tareas: postInfo[]=[];

  constructor(private service: TareasSeriveService) { }

  ngOnInit(): void {
    this.tareas = this.service.Get();
  }

  isModalOpen:boolean = false;
  canDismiss:boolean= false;

  cancelarForm(){
    this.setCanDismiss(true);
    this.setIsModalOpen(false);
  }

  openForm(){
    this.setIsModalOpen(true);
    this.setCanDismiss(false);
  }

  setIsModalOpen(set: boolean){
    this.isModalOpen = set;
  }

  setCanDismiss(set: boolean){
    this.canDismiss=set;
  }

  deletePost(index: number){
    this.service.Delete(index);
    this.tareas=this.service.Get();
  }




}

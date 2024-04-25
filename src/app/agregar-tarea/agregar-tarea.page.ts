import { Component, EventEmitter, Injectable, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Output } from '@angular/core';
import { TareasSeriveService } from '../tareas.serive.service';
import { postInfo } from '../tareas/tareas.page';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
})

export class AgregarTareaPage{
  @Output() messageEvent= new EventEmitter<null>();

  tareas: postInfo[]=[];

  constructor(private formBuilder: FormBuilder, private service:TareasSeriveService) {

  }



  postForm= this.formBuilder.group({
    title: ['', Validators.required],
    month:['', Validators.required],
    year:['', Validators.required],
    desc:['', Validators.required],
  })
  

  months: string[] = (() => {

    var result: string[]= [];
    for (let i=1; i<=12; i++){
      result.push(i.toString());
    }

    return result;

  })();


  years: string[] = (() => {

    var result: string[]= [];
    for (let i=2024; i<=3000; i++){
      result.push(i.toString());
    }

    return result;

  })();


  agregarTarea(){
    let month = this.postForm.value.month || '';

    if(month.length == 1){
        month = '0' + month;
    }

    let input: postInfo = {
      title:this.postForm.value.title || '',
      date: month + '/' + this.postForm.value.year || '',
      desc: this.postForm.value.desc || ''
    };

    this.service.Agregar(input);
    this.messageEvent.emit();
    this.postForm.reset();
  }

  cancel(){
    
    this.messageEvent.emit();
    this.postForm.reset();

  }


}

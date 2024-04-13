import { Component, Injectable, OnInit, inject } from '@angular/core';
import { postInfo } from '../tareas/tareas.page';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { service } from '../service';


@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
})

export class AgregarTareaPage {

  router= inject(Router);
  service= inject(service);

  constructor() {

  }
  
  postForm = new FormGroup({
    title: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl(''),
    desc: new FormControl('')
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


  tareas(){
    this.router.navigate(['/tareas']);
  }

  insert(){
    this.service.insert(this.postForm);
    this.postForm.reset();
  }
}

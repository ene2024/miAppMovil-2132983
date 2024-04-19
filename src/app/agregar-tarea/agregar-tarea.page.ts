import { Component, EventEmitter, Injectable, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
})

export class AgregarTareaPage {
  @Output() messageEvent= new EventEmitter<FormGroup>();
  @Output() cancelEvent= new EventEmitter<null>();

  constructor(private formBuilder: FormBuilder) {

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
    this.messageEvent.emit(this.postForm);
    this.postForm.reset();
  }

  cancel(){
    this.cancelEvent.emit();
    this.postForm.reset();

  }


}

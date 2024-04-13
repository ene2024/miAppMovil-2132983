import { Injectable } from "@angular/core";
import { postInfo } from "./tareas/tareas.page";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";


@Injectable({
    providedIn: 'root',
})

export class service{

    postForm = new FormGroup({
        title: new FormControl(''),
        month: new FormControl(''),
        year: new FormControl(''),
        desc: new FormControl('')
      })


    postInfo: postInfo [] = [{title: "Llevar a Bruno al veterinario", date: "05/24", desc: "Hello world!"}, 
    {title: "Recordar tarea de Aplicaciones Móviles", date:"05/24", desc: "Hello world!"}];

    insert(postForm: FormGroup) {
        let month = postForm.value.month;
        window.alert(month.length);

        if(month.length == 1){
            month = '0' + month;
        }

        this.postInfo.push({
            title: postForm.value.title,
            date: month + '/' + postForm.value.year.substring(2),
            desc: postForm.value.desc,
        })
    }

}
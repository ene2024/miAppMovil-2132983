import { Component, OnInit } from '@angular/core';
import { postInfo } from '../tareas/tareas.page';
import { TareasSeriveService } from '../tareas.serive.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-paquetes',
  templateUrl: './detalles-paquetes.page.html',
  styleUrls: ['./detalles-paquetes.page.scss'],
})
export class DetallesPaquetesPage implements OnInit {

  tarea : postInfo = {
    title: '',
    desc: '',
    date: '',
  };

  constructor(private tareaService : TareasSeriveService, private route:ActivatedRoute) { 

    this.route.params.subscribe(params => {
      this.tarea = this.tareaService.Get()[+params['id']]
    })
  }

  ngOnInit() {
  }

}

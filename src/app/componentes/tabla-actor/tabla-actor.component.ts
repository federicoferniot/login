import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActoresService } from 'src/app/servicios/actores.service'
import { Actor } from 'src/app/clases/actor'

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  public actores;
  public actorSelect;

  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private actoresService: ActoresService) {
    let list = [];
    this.actoresService.obtenerActores().subscribe((resultado)=>{
      resultado.forEach((actor)=>{
        list.push(new Actor(actor.id, actor.data().nombre, actor.data().apellido, actor.data().sexo, actor.data().fechaNacimiento, actor.data().foto, actor.data().nacionalidad));
      });
      this.actores = list;
    });
   }

  ngOnInit(): void {
  }

  seleccionar(actor){
    this.actorSelect = actor;
    this.actorSeleccionado.emit(actor);
  }

}

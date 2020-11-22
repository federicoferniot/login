import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() list;

  @Input() soloFotos;

  @Input() abm;

  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  @Output() actorBorrar: EventEmitter<any> = new EventEmitter<any>();
  @Output() actorEditar: EventEmitter<any> = new EventEmitter<any>();
  @Output() actorVer: EventEmitter<any> = new EventEmitter<any>();
  @Output() actorPeliculas: EventEmitter<any> = new EventEmitter<any>();
  @Output() actorPais: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
   }

  ngOnInit(): void {
  }

  seleccionar(actor){
    this.actorSelect = actor;
    this.actorSeleccionado.emit(actor);
  }

  borrar(actor){
    this.actorBorrar.emit(actor);
  }

  ver(actor) {
    this.actorVer.emit(actor);
  }

  verPeliculas(actor){
    this.actorPeliculas.emit(actor);
  }

  verPais(actor){
    this.actorPais.emit(actor);
  }

  editar(actor) {
    this.actorEditar.emit(actor);
  }

}

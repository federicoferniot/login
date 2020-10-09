import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-borrar-actor',
  templateUrl: './borrar-actor.component.html',
  styleUrls: ['./borrar-actor.component.css']
})
export class BorrarActorComponent implements OnInit {
  @Input() actor;
  @Output() borrarActor: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  borrar(){
    this.borrarActor.emit(this.actor);
  }

}

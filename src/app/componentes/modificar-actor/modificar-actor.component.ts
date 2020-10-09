import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-modificar-actor',
  templateUrl: './modificar-actor.component.html',
  styleUrls: ['./modificar-actor.component.css']
})
export class ModificarActorComponent implements OnInit {
  public nombre;
  public apellido;
  public sexo;
  public nacionalidad;
  public fechaNacimiento;

  @Input() actor;

  @Output() editarActor: EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log()
    if(changes['actor']) {
      this.nombre = this.actor.nombre;
      this.apellido = this.actor.apellido;
      this.sexo = this.actor.sexo;
      this.fechaNacimiento = this.actor.fechaNacimiento;
      this.nacionalidad = this.actor.nacionalidad;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  editar(){
    let actor = new Actor(this.actor.id, this.nombre, this.apellido, this.sexo, this.fechaNacimiento, null, this.nacionalidad)
    this.editarActor.emit(actor);
  }

  seleccionarNacionalidad(pais){
    this.nacionalidad = pais.name;
  }

}

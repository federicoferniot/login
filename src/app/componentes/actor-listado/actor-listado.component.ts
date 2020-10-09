import { Component, OnInit } from '@angular/core';
import { ActoresService } from 'src/app/servicios/actores.service';
import { Actor } from 'src/app/clases/actor'

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  public actorParaBorrar;
  public actorParaEditar;
  public actorParaMostrar;
  public actores;

  constructor(private actoresService: ActoresService) {
    this.cargarDatos();
  }

  cargarDatos(){
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

  prepararBorrar(evento) {
    this.actorParaBorrar = evento;
  }

  prepararVer(evento) {
    this.actorParaMostrar = evento;
  }

  prepararEditar(evento) {
    this.actorParaEditar = evento;
  }

  limpiar(event){
    this.actorParaMostrar = null;
  }

  borrar(event){
    this.actorParaBorrar = null;
    this.actoresService.borrar(event).then(()=>{
      this.cargarDatos();
    })
  }

  editar(event){
    this.actorParaEditar = null;
    this.actoresService.editar(event).then(()=>{
      this.cargarDatos();
    });
  }

}

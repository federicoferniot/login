import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { ActoresService } from 'src/app/servicios/actores.service';
import { Actor } from 'src/app/clases/actor'

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  public nombre;
  public tipo;
  public fechaEstreno;
  public cantidadPublico;
  public cargando = false;
  public actor;
  public actores;

  constructor(private peliculaService: PeliculasService, private router: Router, private actoresService: ActoresService) {
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

  seleccionarActor(actor){
    this.actor = actor;
  }

  guardar(){
    if(this.nombre != null && this.tipo != null && this.fechaEstreno != null && this.cantidadPublico !=null && this.actor != null){
      this.cargando = true;
      this.peliculaService.obtenerPeliculas().subscribe((resultado)=>{
        let max = 0;
        resultado.forEach((pelicula)=>{
          max = Math.max(pelicula.data().id, max);
        })
        let pelicula = new Pelicula(max+1, this.nombre, this.tipo, this.fechaEstreno, this.cantidadPublico, null);
        this.peliculaService.guardar(pelicula, this.actor).then(()=>{
          this.cargando = false;
          this.router.navigate(['/búsqueda'])
        })
      });
    }
  }

  habilitado(){
    return (this.nombre != null && this.tipo != null && this.fechaEstreno != null && this.cantidadPublico !=null && this.actor != null);
  }

}

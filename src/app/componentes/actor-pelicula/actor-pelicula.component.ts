import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { ActoresService } from 'src/app/servicios/actores.service';
import { PaisesService } from 'src/app/servicios/paises.service';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  public paisParaMostrar;
  public actorVerPeliculas;
  public actorParaEditar;
  public actorParaMostrar;
  public actores;
  public listaPeliculas;

  constructor(private actoresService: ActoresService, private paisesService: PaisesService, private peliculasService: PeliculasService) {
    this.cargarDatos();
  }

  ngOnInit(): void {
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

  prepararVer(actor){
    this.actorParaMostrar = actor;
  }

  prepararVerPais(actor){
    let paises = [];
    this.paisesService.getPaises().subscribe((resultado: any)=>{
      paises = resultado.slice(0, 10);
      paises = paises.filter((pais)=>{
        return pais.name == actor.nacionalidad;
      });
      this.paisParaMostrar = paises[0];
    });
  }

  prepararVerPeliculas(actor){
    this.peliculasService.obtenerPeliculas().subscribe((resultados)=>{
      let lista = [];
      resultados.forEach((pelicula)=>{
        if(actor.id == pelicula.data().actor){
          lista.push(new Pelicula(pelicula.id, pelicula.data().nombre, pelicula.data().tipo, pelicula.data().fechaEstreno, pelicula.data().cantidadPublico, pelicula.data().fotoPelicula));
        }
      });
      this.actorVerPeliculas = actor;
      this.listaPeliculas = lista;
    });
  }

  limpiar(event){
    this.actorParaMostrar = null;
  }

}

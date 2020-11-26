import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { ActoresService } from 'src/app/servicios/actores.service';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-pais-pelicula',
  templateUrl: './pais-pelicula.component.html',
  styleUrls: ['./pais-pelicula.component.css']
})
export class PaisPeliculaComponent implements OnInit {
  public paisDetalle;
  public paisPeliculas;
  public paisActores;
  public listaPeliculas;
  public listaActores;
  private peliculas = [];
  private actores = [];

  constructor(private actoresService: ActoresService, private peliculasService: PeliculasService) {
    this.peliculasService.obtenerPeliculas().subscribe(resultado=>{
      resultado.forEach(el=>{
        this.peliculas.push(new Pelicula(el.id, el.data().nombre,el.data().tipo, el.data().fechaEstreno, el.data().cantidadPublico, el.data().fotoPelicula, el.data().origen));
      });
    });
    this.actoresService.obtenerActores().subscribe(resultado=>{
      resultado.forEach(el=>{
        this.actores.push(new Actor(el.id, el.data().nombre, el.data().apellido, el.data().sexo, el.data().fechaNacimiento, el.data().foto, el.data().nacionalidad));
      });
    })
  }

  ngOnInit(): void {
  }

  verPeliculas(pais){
    this.listaPeliculas = this.peliculas.filter(pelicula=>{
      return pelicula.origen == pais.name;
    });
    this.paisPeliculas = pais;
  }

  verActores(pais){
    this.listaActores = this.actores.filter(actor=>{
      return actor.nacionalidad == pais.name;
    });
    this.paisActores = pais;
  }

  verDetalle(pais){
    this.paisDetalle = pais;
  }

}

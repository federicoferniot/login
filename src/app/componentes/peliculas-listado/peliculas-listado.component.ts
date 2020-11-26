import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.css']
})
export class PeliculasListadoComponent implements OnInit {


  public listaPeliculas;
  public peliculaVer;

  constructor(private peliculasService: PeliculasService) {
    this.peliculasService.obtenerPeliculas().subscribe((resultados)=>{
      let lista = [];
      resultados.forEach((pelicula)=>{
        lista.push(new Pelicula(pelicula.id, pelicula.data().nombre, pelicula.data().tipo, pelicula.data().fechaEstreno, pelicula.data().cantidadPublico, pelicula.data().fotoPelicula, pelicula.data().origen));
      })
      this.listaPeliculas = lista;
    })
  }

  ngOnInit(): void {
  }

  ver(pelicula){
    this.peliculaVer = pelicula;
  }

}

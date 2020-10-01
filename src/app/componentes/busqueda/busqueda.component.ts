import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { Pelicula } from 'src/app/clases/pelicula'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public listaPeliculas;
  public peliculaVer;

  constructor(private peliculasService: PeliculasService) {
    this.peliculasService.obtenerPeliculas().subscribe((resultados)=>{
      let lista = [];
      resultados.forEach((pelicula)=>{
        lista.push(new Pelicula(pelicula.data().id, pelicula.data().nombre, pelicula.data().tipo, pelicula.data().fechaEstreno, pelicula.data().cantidadPublico, pelicula.data().fotoPelicula));
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

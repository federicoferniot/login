import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

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

  constructor(private peliculaService: PeliculasService) { }

  ngOnInit(): void {
  }

  seleccionarActor(actor){
    console.log(actor);
  }

  guardar(){
    if(this.nombre != null && this.tipo != null && this.fechaEstreno != null && this.cantidadPublico !=null){
      let pelicula = new Pelicula(Math.round(Math.random()*100), this.nombre, this.tipo, this.fechaEstreno, this.cantidadPublico, null);
      this.peliculaService.guardar(pelicula).then(()=>{
        console.log("guardada");
      })
    }

  }

}

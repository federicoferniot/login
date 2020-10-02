import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public cargando = false;
  public actor;

  constructor(private peliculaService: PeliculasService, private router: Router) { }


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

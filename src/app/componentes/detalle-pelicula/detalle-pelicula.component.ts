import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula;
  @Input() borrado;

  constructor() { }

  ngOnInit(): void {
  }

  borrar(){
    console.log(this.pelicula);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service'

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  public paises =[];
  public paisSeleccionado;

  @Input() listado;

  @Output() paisSeleccion: EventEmitter<any> = new EventEmitter<any>();
  @Output() peliculas: EventEmitter<any> = new EventEmitter<any>();
  @Output() actores: EventEmitter<any> = new EventEmitter<any>();
  @Output() detalle: EventEmitter<any> = new EventEmitter<any>();

  constructor(private paisesService: PaisesService) {
    this.paisesService.getPaises().subscribe((resultado: any)=>{
      
      this.paises = resultado.slice(0, 10);
    })
  }

  ngOnInit(): void {
  }

  seleccionar(pais){
    this.paisSeleccionado = pais;
    this.paisSeleccion.emit(pais);
  }

  verPeliculas(pais){
    this.peliculas.emit(pais);
  }

  verActores(pais){
    this.actores.emit(pais);
  }

  verDetalle(pais){
    this.detalle.emit(pais);
  }

}

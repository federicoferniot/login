import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service'

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  public paises =[];
  public paisSeleccionado;

  @Output() paisSeleccion: EventEmitter<any> = new EventEmitter<any>();

  constructor(private paisesService: PaisesService) {
    this.paisesService.getPaises().subscribe((resultado: any)=>{
      
      this.paises = resultado.slice(0, 6);
    })
  }

  ngOnInit(): void {
  }

  seleccionar(pais){
    this.paisSeleccionado = pais;
    this.paisSeleccion.emit(pais);
  }

}

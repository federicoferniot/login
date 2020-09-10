import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listado;

  constructor() { }

  ngOnInit(): void {
  }

  ver(elem){
    console.log(elem);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paises-bandera',
  templateUrl: './paises-bandera.component.html',
  styleUrls: ['./paises-bandera.component.css']
})
export class PaisesBanderaComponent implements OnInit {

  @Input() pais;

  @Output() detalle: EventEmitter<any> = new EventEmitter<any>();

  @Output() guardarEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  verDetalle(){
    this.detalle.emit(this.pais);
  }

  guardar(){
    this.guardarEvent.emit(this.pais);
  }

}

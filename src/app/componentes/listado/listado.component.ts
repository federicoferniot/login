import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../servicios/data.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public isLista = true;

  @Output() usuarioVer: EventEmitter<any> = new EventEmitter<any>();
  @Output() usuarioBorrar: EventEmitter<any> = new EventEmitter<any>();
  @Output() usuarioEditar: EventEmitter<any> = new EventEmitter<any>();

  @Input() list;

  constructor() { }

  ngOnInit(): void {

  }

  borrar(usuario) {
    this.usuarioBorrar.emit(usuario);
  }

  ver(usuario) {
    this.usuarioVer.emit(usuario);
  }

  editar(usuario) {
    this.usuarioEditar.emit(usuario);
  }

  cambiarVista(){
    this.isLista = !this.isLista;
  }

}

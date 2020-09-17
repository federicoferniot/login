import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {

  @Input() unUsuario;
  @Output() seElimino: EventEmitter<any> = new EventEmitter<any>() ;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  borrarEntidad(){
    this.usuariosService.deleteItem(this.unUsuario.id);
    this.seElimino.emit(true);
  }

}

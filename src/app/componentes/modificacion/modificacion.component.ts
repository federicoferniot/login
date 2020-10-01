import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modificacion',
  templateUrl: './modificacion.component.html',
  styleUrls: ['./modificacion.component.css']
})
export class ModificacionComponent implements OnInit {
  public last;
  public email;
  @Input() usuario;

  @Output() editarUsuario: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['usuario']) {
      this.last = this.usuario.last_name;
      this.email = this.usuario.email
    }
  }

  editar(){
    this.editarUsuario.emit({
      id: this.usuario.id,
      last_name: this.last,
      email: this.email
    });
  }

}

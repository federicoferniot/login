import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuariosService } from 'src/app/servicios/usuarios.service'

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {
  subscription: Subscription;

  usuarioParaMostrar;

  list = [];
  listBorrados = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.subscription = this.usuariosService.getNotification().subscribe( data => {
      if(data){
        this.list = this.usuariosService.obtenerUsuarios();
        this.listBorrados = this.usuariosService.obtenerEliminados();
      }
    })
  }

  tomarUsuarioDetalle(usuario){
    this.usuarioParaMostrar = usuario;
  }
}

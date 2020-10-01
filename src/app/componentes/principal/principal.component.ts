import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public listaUsuarios = [];

  public usuarioParaMostrar;
  public usuarioParaBorrar;
  public usuarioParaEditar;

  constructor(private dataService: DataService) {
    this.dataService.obtenerUsuarios().subscribe((usuarios: any) => {
      console.log(usuarios)
      this.listaUsuarios = usuarios;
    });

  }

  ngOnInit(): void {
  }

  prepararBorrar(evento) {
    this.usuarioParaBorrar = evento;
  }

  prepararVer(evento) {
    this.usuarioParaMostrar = evento;
  }

  prepararEditar(evento) {
    this.usuarioParaEditar = evento;
  }

  limpiar(){
    this.usuarioParaMostrar = null;
  }

  borrar(usuario){
    this.usuarioParaBorrar = null;
    this.listaUsuarios = this.listaUsuarios.filter((user)=>{
      return user.id != usuario.id
    })
  }

  editar(usuario){
    this.usuarioParaEditar = null;
    this.listaUsuarios.forEach((user)=>{
      if(user.id == usuario.id){
        user.last_name = usuario.last_name;
        user.email = usuario.email;
      }
    })
  }

}

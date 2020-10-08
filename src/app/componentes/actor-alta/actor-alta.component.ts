import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/clases/actor';
import { ActoresService } from 'src/app/servicios/actores.service'

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  public nombre;
  public apellido;
  public fechaNacimiento;
  public sexo;
  public cargando = false;
  public nacionalidad;

  constructor(private actoresService: ActoresService, private router: Router) { }

  ngOnInit(): void {
  }

  guardar(){
    this.cargando = true;
    let actor = new Actor(0, this.nombre, this.apellido, this.sexo, this.fechaNacimiento, null, this.nacionalidad);
    this.actoresService.guardar(actor).then(()=>{
      this.cargando = false;
      this.router.navigate(['/bienvenido']);
    })
  }

  habilitado(){
    return (this.nombre != null && this.sexo != null && this.fechaNacimiento != null && this.apellido !=null && this.nacionalidad != null);
  }

  seleccionarNacionalidad(pais){
    this.nacionalidad = pais.name;
  }

}

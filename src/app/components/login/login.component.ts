import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../model/usuario'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(private router:Router) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }

  ingresar(){
    if(this.usuario.nombre!=null && this.usuario.clave!=null){
      this.router.navigate(['bienvenido']);
    }
    else{
      this.router.navigate(['error']);
    }
  }

}

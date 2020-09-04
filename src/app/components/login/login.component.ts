import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../model/usuario'
import { Router } from '@angular/router';
import { AuthService } from  '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(private router:Router, private authService: AuthService) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }

  ingresar(){
    this.authService.login(this.usuario.nombre, this.usuario.clave).then(res => {
      this.router.navigate(['bienvenido']);
    }).catch(error => {
      this.router.navigate(['error']);
    })
  }

}

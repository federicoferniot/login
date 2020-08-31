import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public edadUno: number;
  public edadDos: number;
  public suma: number;
  public promedio: number;

  Calcular(){
    if(this.edadUno!=null 
      && this.edadDos != null 
      && this.edadUno>0 
      && this.edadDos>0)
    {
      this.suma = this.edadUno + this.edadDos;
      this.promedio = (this.edadUno + this.edadDos) / 2;
    }
  }

  Limpiar(){
    this.edadUno = null;
    this.edadDos = null;
    this.promedio = null;
    this.suma = null;
  }
}

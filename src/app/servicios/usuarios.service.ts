import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = "https://api.mocki.io/v1/570c5e5c";
  private subject =new Subject<any>();
  public list = [];
  public listDelete = [];

  constructor(private http: HttpClient) { 
    this.http.get(this.url).subscribe((usuarios: any) => {
      this.list = usuarios;
      this.sendNotification(true);
    }, error => {
      console.log(error);
    })
  }

  sendNotification(value: any){
    this.subject.next({text:value});
  }

  getNotification(){
    return this.subject.asObservable();
  }

  public obtenerUsuarios() {
    return this.list;
  }

  public obtenerEliminados(){
    return this.listDelete;
  }

  deleteItem(id){
    let elemento;
    this.list = this.list.filter((element, index) => {
      if(element.id == id){
        elemento = element;
      }
      return element.id != id;
    });
    if(elemento){
      this.listDelete.push(elemento);
    }
    this.sendNotification(true);
  }
}

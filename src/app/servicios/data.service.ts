import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "https://api.mocki.io/v1/0948e589 "
  private subject = new Subject<any>();
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

  sendNotification(value: any) {
    this.subject.next({ text: value });
  }

  getNotification() {
    return this.subject.asObservable();
  }

  public obtenerUsuarios() {
    return this.http.get(this.url);
  }


}

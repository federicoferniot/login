import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private db: AngularFirestore) { }

  public obtenerActores(){
    return this.db.collection('actores').get();
  }
}

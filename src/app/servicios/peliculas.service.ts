import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private db: AngularFirestore) { }

  public obtenerPeliculas(){
    return this.db.collection('peliculas').get();
  }
}

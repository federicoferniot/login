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

  public guardar(pelicula, actor){
      return this.db.collection('peliculas').add({
        id: pelicula.id,
        nombre: pelicula.nombre,
        tipo: pelicula.tipo,
        fechaEstreno: pelicula.fechaEstreno,
        cantidadPublico: pelicula.cantidadPublico,
        fotoPelicula: pelicula.fotoPelicula,
        actor: actor.id,
        origen: pelicula.origen
      });
  }
}

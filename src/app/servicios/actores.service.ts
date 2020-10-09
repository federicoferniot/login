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

  public guardar(actor){
    return this.db.collection('actores').add(
      {
        nombre: actor.nombre,
        apellido: actor.apellido,
        foto: null,
        fechaNacimiento: actor.fechaNacimiento,
        sexo: actor.sexo,
        nacionalidad: actor.nacionalidad
      }
    )
  }

  public borrar(actor){
    return this.db.collection('actores').doc(actor.id).delete();
  }

  public editar(actor){
    return this.db.collection('actores').doc(actor.id).set({
      nombre: actor.nombre,
      apellido: actor.apellido,
      fechaNacimiento: actor.fechaNacimiento,
      sexo: actor.sexo,
      nacionalidad: actor.nacionalidad
    }, {merge: true});
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly afs: AngularFirestore) { }

  traerPaises()
  {
    return this.afs.collectionGroup('paises').valueChanges();
  }

  traerActores()
  {
    return this.afs.collectionGroup('actores').valueChanges();
  }
}

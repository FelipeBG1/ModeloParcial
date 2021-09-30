import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  actores : any = "";
  constructor(private readonly afs: AngularFirestore) {
    this.afs.collectionGroup('actores')
    .valueChanges().subscribe(actores => {
      this.actores = actores;
    
    });
  }

  ngOnInit(): void {
  }

}

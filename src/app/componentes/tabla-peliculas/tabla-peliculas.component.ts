import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.scss']
})
export class TablaPeliculasComponent implements OnInit {

  @Output() peliculaEvent = new EventEmitter<Pelicula>();
  date : Date = new Date();
  fecha : string = this.date.getFullYear() + "/" + this.date.getMonth() + "/" + this.date.getDay();
  tabla : boolean = false;

  peliculas : any = "";
  constructor(private readonly afs: AngularFirestore) {
    this.afs.collectionGroup('peliculas')
    .valueChanges().subscribe(peliculas => {
      this.peliculas = peliculas;
    
    });
  }

  ngOnInit(): void {
  }

  enviarPelicula(pelicula : Pelicula)
  {
    this.peliculaEvent.emit(pelicula);
    console.log(pelicula);
  }

  mostrarTabla()
  {
    if(!this.tabla)
    {
      this.tabla = true;
    }
    else
    {
      this.tabla = false;
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pelicula } from 'src/app/clases/pelicula';
import { __values } from 'tslib';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  public grupoControles !: FormGroup;

  nombre : string = "";
  tipo : string = "";
  fechaEstreno : string = "";
  cantidadPublico : string = "";
  fotoDeLaPelicula : string = "";
  actor : string = "";
  agregado : string = "";

  constructor(private fb : FormBuilder,private firestore : AngularFirestore) { }

  ngOnInit(): void {
    this.grupoControles = this.fb.group({
      'nombre' : ['',Validators.required],
      'tipo' : ['',Validators.required],
      'fechaEstreno' : ['',Validators.required],
      'cantidadPublico' : ['',Validators.required],
      'fotoDeLaPelicula' : ['',Validators.required],
      'actor' : ['',Validators.required],
    });
  }

  cargarActor($event : Actor)
  {
    this.grupoControles.get('actor')?.setValue($event.nombre);
  }

  cargarPelicula()
  {
    let pelicula : Pelicula = new Pelicula(this.grupoControles.get("nombre")?.value,this.grupoControles.get("tipo")?.value,this.grupoControles.get("fechaEstreno")?.value,this.grupoControles.get("cantidadPublico")?.value,this.grupoControles.get("fotoDeLaPelicula")?.value,this.grupoControles.get("actor")?.value);

    this.agregarPeliculaBD({...pelicula}).then((response : any) => {
      console.log("actor registrado");
      this.agregado = "Se agrego la pelicula";
      setTimeout(() => {
        this.agregado = "";
        this.grupoControles.reset();
      }, 3000);
    })
    .catch((response : any) => {
      console.log(response);
      this.agregado = "No se pudo agregar la pelicula";
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    });
   
  }

  agregarPeliculaBD(pelicula : Pelicula)
  {
    
    return this.firestore.collection("peliculas").add(pelicula);
  }


}

import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  public grupoControles !: FormGroup;

  pais : string = "";
  bandera : string = "";
  nombre : string = "";
  apellido : string = "";
  agregado : string = "";
  disabled : boolean = false;


  constructor(private fb : FormBuilder,private firestore : AngularFirestore) { }

  ngOnInit(): void {
    this.grupoControles = this.fb.group({
      'nombre' : ['',Validators.required],
      'apellido' : ['',Validators.required],
      'pais' : ['',Validators.required]
    });
  }

  cargarNacionalidad($event : Pais)
  {
    this.pais = $event.nombre;
    this.bandera = $event.bandera;
    
  }

  cargarActor()
  {
    let actor : Actor = new Actor(this.grupoControles.get("nombre")?.value,this.grupoControles.get("apellido")?.value,this.pais,this.bandera);

    this.agregarActorBD({...actor}).then((response : any) => {
      console.log("actor registrado");
      this.agregado = "Se agrego el actor";
      this.grupoControles.reset();
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    })
    .catch((response : any) => {
      console.log(response);
      this.agregado = "No se pudo agregar al actor";
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    });
   
  }

  agregarActorBD(actor : Actor)
  {
    return this.firestore.collection("actores").add(actor);
  }

}

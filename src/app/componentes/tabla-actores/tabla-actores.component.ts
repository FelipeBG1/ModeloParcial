import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.scss']
})
export class TablaActoresComponent implements OnInit {

  @Output() actorEvent = new EventEmitter<Actor>();

  actores : any = "";
  constructor(private actoresService : ApiService) {
    this.cargarTabla();
   }

  ngOnInit(): void {
  }

  cargarActor(actor : Actor)
  {
    this.actorEvent.emit(actor);
  }

  cargarTabla()
  {
    this.actoresService.traerActores().subscribe(actors => {
      this.actores = actors;
    });
    console.log(this.actores);
  }

}

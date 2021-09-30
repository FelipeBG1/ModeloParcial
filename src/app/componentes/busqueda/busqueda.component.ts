import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  pelicula : any = "Seleccione una película para conocer sus detalles";
  constructor() { }

  ngOnInit(): void {
  }

  recibirPelicula($event : Pelicula)
  {
    this.pelicula = $event;
    console.log(this.pelicula);
  }

  limpiar()
  {
    this.pelicula = "";
  }
}

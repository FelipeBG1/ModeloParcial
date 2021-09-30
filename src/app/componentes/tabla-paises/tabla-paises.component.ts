import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisEvent = new EventEmitter<Pais>();

  paises : any = "";
  constructor(private apiPaises : ApiService) {
    this.cargarTabla();
   }

  ngOnInit(): void {
  }

  cargarNacionalidad(pais : Pais)
  {
    this.paisEvent.emit(pais);
  }

  cargarTabla()
  {
    this.apiPaises.traerPaises().subscribe(paises => {
      this.paises = paises;
    
    });
    console.log(this.paises);
  }

}

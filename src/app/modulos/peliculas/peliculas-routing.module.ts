import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaAltaComponent } from 'src/app/componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from 'src/app/componentes/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {path: 'altaPelicula',component: PeliculaAltaComponent},
  {path: 'peliculasListado',component: PeliculaListadoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }

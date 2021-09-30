import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculasModule } from './modulos/peliculas/peliculas.module';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'busqueda'},
  {path : 'busqueda', component: BusquedaComponent},
  { path: 'peliculas', loadChildren: () => import('./modulos/peliculas/peliculas.module').then(m => m.PeliculasModule)},
  { path: 'actor', loadChildren: () => import('./modulos/actor/actor.module').then(m => m.ActorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

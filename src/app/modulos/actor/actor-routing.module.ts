import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from 'src/app/componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from 'src/app/componentes/actor-listado/actor-listado.component';

const routes: Routes = [
  {path: 'altaActor',component: ActorAltaComponent},
  {path: 'actoresListado',component: ActorListadoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }

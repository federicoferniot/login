import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculasListadoComponent } from './componentes/peliculas-listado/peliculas-listado.component';

const routes: Routes = [
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'búsqueda', component: BusquedaComponent},
  {path: 'peliculas/alta', component: PeliculaAltaComponent},
  {path: 'actor/alta', component: ActorAltaComponent},
  {path: 'actor/listado', component: ActorListadoComponent},
  {path: 'peliculas/listado', component: PeliculasListadoComponent},
  {path: 'actor/actorpelicula', component: ActorPeliculaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'búsqueda'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

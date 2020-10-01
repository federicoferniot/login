import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { AlbumComponent } from './componentes/album/album.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'personas/listado', component: ControlEntidadComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'principal', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

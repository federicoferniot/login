import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './componentes/peliculas-listado/peliculas-listado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';
import { BorrarActorComponent } from './componentes/borrar-actor/borrar-actor.component';
import { ModificarActorComponent } from './componentes/modificar-actor/modificar-actor.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { PaisPeliculaComponent } from './componentes/pais-pelicula/pais-pelicula.component';

var config = {
  apiKey: "AIzaSyBiKzSepiaRmxKeWDaHNBL5b2AzFsLxru0",
  authDomain: "parcial-53ff2.firebaseapp.com",
  databaseURL: "https://parcial-53ff2.firebaseio.com",
  projectId: "parcial-53ff2",
  storageBucket: "parcial-53ff2.appspot.com",
  messagingSenderId: "441030658460",
  appId: "1:441030658460:web:511abb257137090c106059"

};

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculasListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaActorComponent,
    MenuComponent,
    TablaPaisesComponent,
    DetalleActorComponent,
    BorrarActorComponent,
    ModificarActorComponent,
    ActorPeliculaComponent,
    DetallePaisComponent,
    PaisPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

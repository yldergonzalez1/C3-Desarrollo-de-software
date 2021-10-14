import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionDeUsuariosInicioDeSesionComponent } from './funcion_Ylder/gestion-de-usuarios-inicio-de-sesion/gestion-de-usuarios-inicio-de-sesion.component';
import { LandingPageComponent } from './funcion_landing/landing-page/landing-page.component';
//Rutas para menú de navegación
//import {app_routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    GestionDeUsuariosInicioDeSesionComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

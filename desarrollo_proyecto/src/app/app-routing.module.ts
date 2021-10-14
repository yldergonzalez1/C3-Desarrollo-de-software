import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDeUsuariosInicioDeSesionComponent } from "./funcion_Ylder/gestion-de-usuarios-inicio-de-sesion/gestion-de-usuarios-inicio-de-sesion.component";
import { LandingPageComponent } from "./funcion_landing/landing-page/landing-page.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

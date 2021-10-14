import { RouterModule, Routes } from "@angular/router";
import { GestionDeUsuariosInicioDeSesionComponent } from "./funcion_Ylder/gestion-de-usuarios-inicio-de-sesion/gestion-de-usuarios-inicio-de-sesion.component";
import { LandingPageComponent } from "./funcion_landing/landing-page/landing-page.component";

const app_routes: Routes = [
{path: 'inicio', component: LandingPageComponent},
{path: 'login', component: GestionDeUsuariosInicioDeSesionComponent},
{path:'**', pathMatch: 'full', redirectTo: ''}

];
export const app_routing = RouterModule.forRoot(app_routes);     
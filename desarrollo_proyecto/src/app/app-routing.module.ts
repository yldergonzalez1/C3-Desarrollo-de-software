import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { GestionDeUsuariosInicioDeSesionComponent } from './Ylder/gestion-de-usuarios-inicio-de-sesion/gestion-de-usuarios-inicio-de-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { GestionDeFacturacionComponent } from './Ricardo/gestion-de-facturacion/gestion-de-facturacion.component';

const routes: Routes =[
{path: 'inicio', component: InicioComponent},
{path: 'facturas', component: GestionDeFacturacionComponent},
{path: 'login', component: GestionDeUsuariosInicioDeSesionComponent},
{path: 'registrar usuario', component: RegistrarUsuarioComponent},
{path: '', component: InicioComponent}
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
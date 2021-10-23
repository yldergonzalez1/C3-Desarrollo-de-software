import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionDeUsuariosComponent } from './Johana/gestion-de-usuarios/gestion-de-usuarios.component';
import { GestionDeFacturacionComponent } from './Ricardo/gestion-de-facturacion/gestion-de-facturacion.component';
import { GestionDeCotizacionesComponent } from './Santiago/gestion-de-cotizaciones/gestion-de-cotizaciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionDeUsuariosComponent,
    GestionDeFacturacionComponent,
    GestionDeCotizacionesComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

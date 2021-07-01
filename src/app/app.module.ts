import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';

import { UsuariosModule } from './usuarios/usuarios.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsuariosModule,
    PokemonsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

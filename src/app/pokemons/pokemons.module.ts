import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetalheComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonsModule { }
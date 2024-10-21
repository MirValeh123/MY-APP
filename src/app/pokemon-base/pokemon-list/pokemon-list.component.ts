import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonDetailComponent } from "../pokemon-detail/pokemon-detail.component";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  pokemons:Pokemon[] = [
    {
      id:1,
      name:'pikachu',
      type:'electric',
      isCool:false,
      isStylish:false

    },
    {
      id:2,
      name:'squirtle',
      type:'water',
      isCool:false,
      isStylish:false

    },
    {
      id:3,
      name:'charmander',
      type:'fire',
      isCool:false,
      isStylish:false

    },
  ]

  handleRemove(event: Pokemon)
  {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon)=>{
      return pokemon.id !== event.id
    })
  }
}

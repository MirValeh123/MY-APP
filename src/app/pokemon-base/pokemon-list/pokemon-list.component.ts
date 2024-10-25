import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonDetailComponent } from "../pokemon-detail/pokemon-detail.component";
import { PokemonService } from '../../sevices/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] ;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    debugger;
    
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      this.pokemons = data;
    });
    console.log(this.pokemons);
  }

  handleRemove(event: Pokemon): void {
    debugger;

    this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== event.id);
  }
}

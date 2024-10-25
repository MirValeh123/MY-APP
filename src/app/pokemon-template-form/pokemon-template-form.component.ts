import { Component, Input, OnInit, Pipe } from '@angular/core';
import { PokemonService } from '../sevices/pokemon.service';
import { Pokemon, PokemonType } from '../models/pokemon';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-template-form',
  standalone: true,
  imports: [JsonPipe,FormsModule,CommonModule],
  templateUrl: './pokemon-template-form.component.html',
  styleUrl: './pokemon-template-form.component.css'
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon: Pokemon; 
  pokemonType:PokemonType[] = [
    {
      key:0,
      value:'Fire'
    },

    {
      key:1,
      value:'Water'
    }
  ]
  constructor(private pokemonService: PokemonService) {

  }


  ngOnInit(): void {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    })
  }

  toggleIsCool(object:any)
  {
    console.log(object)
    // this.pokemon.isCool = !this.pokemon.isCool
  }
  // @Input pokemonType:string[]
}

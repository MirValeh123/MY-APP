import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonListComponent } from './pokemon-base/pokemon-list/pokemon-list.component';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PokemonListComponent,PokemonTemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MY-APP';

}

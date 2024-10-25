import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {

  @Input() detail!: Pokemon
  @Output() remove: EventEmitter<any> = new EventEmitter();


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  onRemove() {
    debugger;
    this.remove.emit(this.detail);
  }
}



import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @Input() pokemons: Pokemon[] = []
  constructor() { }

  ngOnInit(): void {
    
  }

}

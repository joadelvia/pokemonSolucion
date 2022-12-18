import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/pokemon/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  filterNom: string = '';
  @Output() term:EventEmitter<string> = new EventEmitter();
  constructor(private pokemonService:PokemonService) { }
  

  ngOnInit(): void {
  }

  search():void{
    this.term.emit(this.filterNom);
  }

}

import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/pokemon/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[]=[];
  showSearch: boolean = false;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons()
    .subscribe({
      next: (resp)=> this.pokemons= resp
    })
  }

  hide():void{
    this.showSearch = !this.showSearch;
  }

  search(term:string):void{
    this.pokemonService.getPokemons(term)
    .subscribe({
      next: (resp)=> this.pokemons= resp
    })
  }



}

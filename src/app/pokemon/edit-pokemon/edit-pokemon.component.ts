import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html'
})
export class EditPokemonComponent implements OnInit {
  pokemon!:Pokemon;

  constructor(private route:ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.route.snapshot.params['pokemon'])
    .subscribe({
      next: (resp) => {
        this.pokemon=resp;
      }
    })
  }

  save():void{
    this.pokemonService.savePokemon(this.pokemon)
  }

}

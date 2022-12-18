import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string = 'http://localhost:3000/pokemons'
  constructor(private http: HttpClient) { }

  getPokemons(search:string=''): Observable<Pokemon[]>{
    if (search === ''){
      return this.http.get<Pokemon[]>(this.url);
    }
    else{
      return this.http.get<Pokemon[]>(`${this.url}?q=${search}`)
    }
  }

  getPokemon(id:number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.url}/${id}`)
  }

  savePokemon(pokemon:Pokemon):void{
    const headers: HttpHeaders = new HttpHeaders()
    .set('Content-type','application/json')

    this.http.put(`${this.url}/${pokemon.id}`,pokemon,{headers})
    .subscribe({
      next: (resp)=> console.log(resp)
      
    })
  }
}

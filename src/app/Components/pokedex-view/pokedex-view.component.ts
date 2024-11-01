import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent, GraficoComponent, FormsModule],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
  PokemonImagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/1.png'; // Cambiado a 1
  pokemonActual: number = 1; // Empieza con el primer Pokémon
  currentPokemonHealth: number = 100;

  avanzarPokemon() {
    this.pokemonActual++;
    this.updatePokemonImage();
  }
  
  handlePokemon(event: number) {
    this.pokemonActual += event;
    this.updatePokemonImage();
  }

  buscarPokemon() {
    this.updatePokemonImage();
  }

  updatePokemonImage() {
    // Verifica que el ID sea válido
    if (this.pokemonActual > 0) {
      this.PokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/${this.pokemonActual}.png`;
    } else {
      // Resetea a un Pokémon por defecto si el ID es inválido
      this.PokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/1.png`;
    }
  }

}

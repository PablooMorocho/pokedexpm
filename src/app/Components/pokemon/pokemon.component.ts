import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
@Input({required: true})solicitarImagen: string = "";//Paso1: Ir al hijo y Hacer Input a la propiedad
@Output() clickPokemon = new EventEmitter<number>();

anteriorPokemon(){
  this.clickPokemon.emit(-1);  
}
siguientePokemon(){
  this.clickPokemon.emit(1);
}
}

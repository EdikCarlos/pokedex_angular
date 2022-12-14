import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
@Input()
nomePokemon: string;

@Input()
idPokemon: number;

getPokemonImg() {
  const formatedNumber = this.leadingZero(this.idPokemon)

  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatedNumber}.png`
  
}

leadingZero(str: string | number, size = 3): string {
  let s = String(str);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s
}
}

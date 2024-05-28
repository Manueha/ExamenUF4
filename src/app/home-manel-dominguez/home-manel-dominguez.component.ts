import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LlocsManelDominguezComponent } from '../llocs-manel-dominguez/llocs-manel-dominguez.component'; // Corregir la ruta del import
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
}

@Component({
  selector: 'app-home-manel-dominguez',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './home-manel-dominguez.component.html',
  styleUrls: ['./home-manel-dominguez.component.css']
})
export class HomeManelDominguezComponent {

  pokemon: Pokemon | null = null;
  pokemonBuscado: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  BuscarPokemon(idOrName: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${idOrName}`).subscribe(
        (data) => {
          const isFlyingType = data.types.some(typeInfo => typeInfo.type.name === 'flying');
          if (isFlyingType) {
            this.pokemon = data;
            this.message = `El Pokemon ${idOrName} es de tipo volador`;
            resolve();
          } else {
            this.pokemon = null;
            this.message = 'El Pokemon no es de tipo volador';
            reject(this.message);
          }
        },
        (error) => {
          console.error('Error encontrando Pokemon:', error);
          this.message = 'Error encontrando Pokemon';
          reject(this.message);
        }
      );
    });
  }

}

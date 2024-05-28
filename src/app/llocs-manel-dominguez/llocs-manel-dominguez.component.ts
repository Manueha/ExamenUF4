import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-llocs-manel-dominguez',
  templateUrl: './llocs-manel-dominguez.component.html',
  styleUrls: ['./llocs-manel-dominguez.component.css']
})
export class LlocsManelDominguezComponent {
  @Input() pokemonName: string | null = null;
  localitzacio: string[] = [];

  constructor(private http: HttpClient) {}

  //Adria te hago el codigo si esta mal que sepas que me he  tirado 1 hora del examen intentado solucionar los errores que me estaba
  // dando el  ide ya mas no puedo ahcer.

  ngOnChanges() {
    if (this.pokemonName) {
      this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}/encounters`).subscribe(
        (data) => {
          this.localitzacio = data.map((location: any) => location.location_area.name);
        },
        (error) => {
          console.error('Error trobant les ubicaciosn:', error);
        }
      );
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  API: string
  constructor(private http: HttpClient) {
    this.API = environment.baseUrl;
  }
  getList = "/v2/pokemon"
  getPokemanList() {
    return this.http.get(this.API + this.getList);
  }
}

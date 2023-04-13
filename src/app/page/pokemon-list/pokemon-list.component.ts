import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],

})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  data: any = [];
  arrOfNewData:any=[];
  imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"; //image url for showing image
  url: any;
  num: any;
  ngOnInit(): void {
    this.GetList()//Called the get pokemons list
  }
  //Get Pokemons Detail
 GetList() {
  try{
      this.pokemonService.getPokemanList().subscribe((response: any) => {
       this.data = response.results;
        this.data.forEach((element: any) => {
          this.num = element.url.split('/')[6];
          let demo = this.imgUrl + this.num + ".png"
          let name=element.name;
          let obj={Name:name,Url:demo};
          this.arrOfNewData.push(obj);
        });
    })
  }catch (e) {
    console.error(e);
  }
  }
}

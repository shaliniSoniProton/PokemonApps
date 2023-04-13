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

  imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";

  url: any;

  num: any;

  ngOnInit(): void {
    this.GetList()
  }

  GetList() {
    this.pokemonService.getPokemanList().subscribe((response: any) => {
      console.log(response, "data");
      this.data = response.results;
      this.data.forEach((element: any) => {
        this.num = element.url.split('/')[6];
        let demo = this.imgUrl + this.num + ".png"
        let name=element.name;
        let obj={Name:name,Url:demo};
        this.arrOfNewData.push(obj);
      });
      console.log(this.arrOfNewData);


    })

  }




}

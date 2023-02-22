import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../model/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  
   cocktails: Cocktail[] = [];

  constructor(public CocktailService: CocktailService){}
  
  ngOnInit(): void {
    this.cocktails = this.CocktailService.getCocktails();
  }
  
}

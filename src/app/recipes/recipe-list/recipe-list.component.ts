import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test', 'https://www.sesdweb.net/cms/lib/PA01000019/Centricity/Domain/267/recipe.gif'), new Recipe('Test recipe 2', 'still testing', 'https://www.sesdweb.net/cms/lib/PA01000019/Centricity/Domain/267/recipe.gif')
  ];

  constructor() { }

  ngOnInit() {
  }

}

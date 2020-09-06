import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
/** recipe-list component*/
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://www.maxpixel.net/static/photo/1x/Cookies-Eat-Dishes-Dessert-Cookie-Delicious-Food-4347095.jpg'),
    new Recipe('A test recipe2', 'This is a test', 'https://www.maxpixel.net/static/photo/1x/Cookies-Eat-Dishes-Dessert-Cookie-Delicious-Food-4347095.jpg')
  ];

  constructor() { }

  ngOnInit() {

  }
}

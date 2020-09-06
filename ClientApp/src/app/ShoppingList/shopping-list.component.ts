import { Component,OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
/** ShoppingList component*/
export class ShoppingListComponent implements OnInit {

  ingredients = [] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes',10),
  ]

  constructor() { }

  ngOnInit() {

  }
}

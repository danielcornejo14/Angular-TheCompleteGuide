import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) { }

  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Pasta noodles', 'https://t2.rg.ltmcdn.com/es/posts/7/2/6/espagueti_rojo_con_crema_74627_orig.jpg', [new Ingredient('Pasta', 1), new Ingredient('Meat', 2)]),
    new Recipe('French Fries', 'Potatoe strips', 'https://thecozycook.com/wp-content/uploads/2018/10/Homemade-French-Fry-Recipe-.jpg', [new Ingredient('Potaotes', 20), new Ingredient('Oil', 2)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }

}

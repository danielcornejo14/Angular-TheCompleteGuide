import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test', 'https://i.blogs.es/b58c26/carbonara_rec/1024_2000.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

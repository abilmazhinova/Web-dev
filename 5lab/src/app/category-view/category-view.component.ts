import { Component } from '@angular/core';
import {categories} from '../category.service';


@Component({
  selector: 'app-category-view',
  ///standalone: true,
  //imports: [],
  templateUrl: './category-view.component.html',
  styleUrl: './category-view.component.css'
})
export class CategoryViewComponent {
  categories = categories;
  

}

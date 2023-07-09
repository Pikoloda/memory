import {Component, OnInit} from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  plusIcon = faPlus;

  categories: Category[] = [];
  categoryName = "";


  constructor(private categoriesService: CategoryService) {}

  ngOnInit(): void {
        this.categoriesService
          .getCategories()
          .subscribe((c: Category[]) => this.categories = c);
    }

  addCategory() {
    this.categoriesService
      .addCategory({name: this.categoryName})
      .subscribe((c: Category) => this.categories.push(c))

    this.categoryName = "";
  }

  removeCategory(category: Category) {
    let indexOf = this.categories.indexOf(category);

    if (category.category_id) {
      this.categoriesService
        .removeCategory(category.category_id)
        .subscribe(() => this.categories.splice(indexOf, 1));
    }
  }
}

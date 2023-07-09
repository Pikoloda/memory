import {Component} from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Category} from "../../models/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
   plusIcon =faPlus;

   categories: Category[] = [{name: "Sport"}, {name: "Dom"}];
   categoryName = "";

   addCategory() {
     this.categories.push({name:this.categoryName})
     this.categoryName = "";
   }
}

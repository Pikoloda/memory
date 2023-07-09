import { Component } from '@angular/core';
import {faComments, faPlay, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  trashIcon = faTrash;
  commentsIcon =faComments;
  playIcon = faPlay;
  plusIcon =faPlus;
}

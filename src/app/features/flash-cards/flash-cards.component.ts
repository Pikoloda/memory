import { Component } from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent {
  plusIcon = faPlus;
}

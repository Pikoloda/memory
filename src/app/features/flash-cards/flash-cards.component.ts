import {Component, OnInit} from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {FlashCardService} from "../../services/flash-card.service";
import {FlashCard} from "../../models/flash-card";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent implements OnInit {
  flashCards: FlashCard[] = [];
  category?: Category;

  word = "";
  translation = "";


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let idString = param.get('category-id');

      if (idString) {
        let id = Number.parseInt(idString);

        this.flashCarsService
          .getCardsForCategory(id)
          .subscribe(flashCards => this.flashCards = flashCards)

        this.categoryService
          .getCategory(id)
          .subscribe(c => this.category = c);
      }
    });
  }

  addFlashCard() {
    if (this.category?.category_id) {
      this.flashCarsService
        .addCard(this.category.category_id, {word: this.word, translation: this.translation})
        .subscribe(f => {
          this.flashCards.push(f);
          this.word = "";
          this.translation = "";
        });
    }
  }

  constructor(private activatedRoute: ActivatedRoute,
              private flashCarsService: FlashCardService,
              private categoryService: CategoryService) {}

  plusIcon = faPlus;

  removeCard(card: FlashCard) {
    if (card.card_id && this.category?.category_id) {
      this.flashCarsService
        .removeCard(this.category.category_id, card.card_id)
        .subscribe(() => this.flashCards.splice(this.flashCards.indexOf(card), 1));
    }
  }
}

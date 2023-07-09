import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  mode  = "flashcard";


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  startGame() {
    this.router.navigate([this.mode], {relativeTo: this.activatedRoute});
  }
}

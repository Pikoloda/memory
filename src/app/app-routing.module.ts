import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./features/categories/categories.component";
import {FlashCardsComponent} from "./features/flash-cards/flash-cards.component";
import {GamesComponent} from "./features/games/games.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "categories"},
  {path: "categories", component: CategoriesComponent},
  {path: "categories/:category-id/flash-cards", component: FlashCardsComponent},
  {path: "categories/:category-id/games", component: GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

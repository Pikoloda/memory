import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { CategoryCardComponent } from './ui/category-card/category-card.component';
import {FormsModule} from "@angular/forms";
import { FlashCardsComponent } from './features/flash-cards/flash-cards.component';
import { GamesComponent } from './features/games/games.component';
import {HttpClientModule} from "@angular/common/http";
import { FlashCardComponent } from './ui/flash-card/flash-card.component';
import { FlashCardModeComponent } from './features/games/flash-card-mode/flash-card-mode.component';
import { WriteModeComponent } from './features/games/write-mode/write-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategoriesComponent,
    CategoryCardComponent,
    FlashCardsComponent,
    GamesComponent,
    FlashCardComponent,
    FlashCardModeComponent,
    WriteModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

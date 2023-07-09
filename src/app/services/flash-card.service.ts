import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FlashCard} from "../models/flash-card";

const BASE_API_URL ="http://localhost:5000/categories";


@Injectable({
  providedIn: 'root'
})
export class FlashCardService {

  constructor(private httpClient: HttpClient) { }

  getCardsForCategory(categoryId: number): Observable<FlashCard[]> {
    return this.httpClient.get<FlashCard[]>(`${BASE_API_URL}/${categoryId}/cards`);
  }

  addCard(categoryId: number, card: FlashCard): Observable<FlashCard> {
    return this.httpClient.post<FlashCard>(`${BASE_API_URL}/${categoryId}/cards`, card);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../models/category";
import {Observable} from "rxjs";

const BASE_API_URL = "http://localhost:5000/categories";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(BASE_API_URL);
  }

  addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(BASE_API_URL, category);
  }

  removeCategory(categoryId: number): Observable<any> {
    return this.httpClient.delete(`${BASE_API_URL}/${categoryId}`);
  }

  getCategory(categoryId: number): Observable<Category> {
    return this.httpClient.get<Category>(`${BASE_API_URL}/${categoryId}`);
  }
}

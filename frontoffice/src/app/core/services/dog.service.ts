import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseAnimal } from '../models/base-animal.model';
import { PaginatedResponse } from '../models/paginated-response.model';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private readonly url = 'http://localhost:1337/dog/';
  constructor(private httpClient: HttpClient) {}

  search(
    searchTerm: string = '',
    limit: number,
    skip: number
  ): Observable<PaginatedResponse<BaseAnimal>> {
    return this.httpClient.get<PaginatedResponse<BaseAnimal>>(
      this.url + `?name_contains=${searchTerm}&_limit=${limit}&_start=${skip}`
    );
  }
}

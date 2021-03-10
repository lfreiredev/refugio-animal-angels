import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseAnimal } from '../models/base-animal.model';
import { PaginatedResponse } from '../models/paginated-response.model';
import { GoogleAnalyticsService } from './google-analytics.service';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private readonly url = 'https://api.refugioanimalangels.com/dog/';
  private readonly lastPostedSize = 6;

  // TODO change this to state
  currAnimal: BaseAnimal;

  constructor(
    private httpClient: HttpClient,
    private googleAnalyticsService: GoogleAnalyticsService) {}

  search(
    searchTerm: string = '',
    limit: number,
    skip: number
  ): Observable<PaginatedResponse<BaseAnimal>> {
    this.googleAnalyticsService.eventEmitter('dog_search', 'dog', 'search', 'dog_name', `name_contains=${searchTerm}&_limit=${limit}&_start=${skip}`);
    return this.httpClient.get<PaginatedResponse<BaseAnimal>>(
      this.url + `?name_contains=${searchTerm}&_limit=${limit}&_start=${skip}&_sort=updatedAt:DESC`
    );
  }

  getLastPosted(): Observable<PaginatedResponse<BaseAnimal>> {
    return this.httpClient.get<PaginatedResponse<BaseAnimal>>(
      this.url + `?_limit=${this.lastPostedSize}&_sort=updatedAt:DESC`
    );
  }

  getById(id: string): Observable<BaseAnimal> {
    this.googleAnalyticsService.eventEmitter('dog_detail', 'dog', 'show_detail', 'dog_id', id);
    return this.httpClient.get<BaseAnimal>(this.url + `${id}`);
  }
}

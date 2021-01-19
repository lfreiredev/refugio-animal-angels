import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseAnimal } from '../models/base-animal.model';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private readonly url = 'http://localhost:1337/dog/';
  constructor(private httpClient: HttpClient) {}

  search(searchTerm: string = ''): Observable<BaseAnimal[]> {
    return this.httpClient.get<BaseAnimal[]>(
      this.url + `?name_contains=${searchTerm}`
    );
  }
}

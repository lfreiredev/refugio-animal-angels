import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseAnimal } from '../models/base-animal.model';
import { PaginatedResponse } from '../models/paginated-response.model';
import { HelpRequest } from '../models/help-request.model';

@Injectable({
  providedIn: 'root',
})
export class HelpRequestService {
  private readonly url = 'https://api.refugioanimalangels.com/help-request/';

  constructor(private httpClient: HttpClient) {}

  get(limit: number, skip: number): Observable<PaginatedResponse<HelpRequest>> {
    return this.httpClient.get<PaginatedResponse<HelpRequest>>(
      this.url + `?_limit=${limit}&_start=${skip}`
    );
  }

  getById(id: string): Observable<HelpRequest> {
    return this.httpClient.get<HelpRequest>(this.url + `${id}`);
  }
}

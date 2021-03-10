import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../models/paginated-response.model';
import { HelpRequest } from '../models/help-request.model';
import { GoogleAnalyticsService } from './google-analytics.service';

@Injectable({
  providedIn: 'root',
})
export class HelpRequestService {
  private readonly url = 'https://api.refugioanimalangels.com/help-request/';

  constructor(
    private httpClient: HttpClient,
    private googleAnalyticsService: GoogleAnalyticsService) {}

  get(limit: number, skip: number): Observable<PaginatedResponse<HelpRequest>> {
    this.googleAnalyticsService.eventEmitter('help_request', 'help_request', 'help_request', 'pagination', `_limit=${limit}&_start=${skip}`);
    return this.httpClient.get<PaginatedResponse<HelpRequest>>(
      this.url + `?_limit=${limit}&_start=${skip}&_sort=updatedAt:DESC`
    );
  }
}

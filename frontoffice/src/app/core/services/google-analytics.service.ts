import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseAnimal } from '../models/base-animal.model';
import { PaginatedResponse } from '../models/paginated-response.model';

declare let gtag:Function;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  
  public eventEmitter( 
    eventName: string, 
    eventCategory: string, 
    eventAction: string, 
    eventLabel: string = null,  
    eventValue: string = null ){ 
      gtag('event', eventName, { 
        eventCategory: eventCategory, 
        eventLabel: eventLabel, 
        eventAction: eventAction, 
        eventValue: eventValue
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../models/paginated-response.model';
import { PaymentMethod } from '../models/payment-method.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodService {
  private readonly url = 'https://api.refugioanimalangels.com/payment_method/';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<PaymentMethod[]> {
    return this.httpClient.get<PaymentMethod[]>(this.url);
  }

  getById(id: string): Observable<PaymentMethod> {
    return this.httpClient.get<PaymentMethod>(this.url + `${id}`);
  }
}

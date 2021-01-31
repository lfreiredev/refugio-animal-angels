import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Photo } from 'src/app/core/models/photo.model';
import { PhotoService } from '../../../core/services/photo.service';
import { PaginatedResponse } from 'src/app/core/models/paginated-response.model';
import { HelpRequest } from 'src/app/core/models/help-request.model';
import { HelpRequestService } from 'src/app/core/services/help-request.service';
import { PaymentMethod } from 'src/app/core/models/payment-method.model';
import { PaymentMethodService } from 'src/app/core/services/payment-method.service';

@Component({
  selector: 'app-help-requests-listing',
  templateUrl: './help-requests-listing.component.html',
  styleUrls: ['./help-requests-listing.component.scss'],
})
export class HelpRequestsListingComponent implements OnInit, OnDestroy {
  data: HelpRequest[];
  paymentMethods: PaymentMethod[];
  pageSize: number = 2;
  pageNumber: number = 0;
  dataSize: number = 0;

  showCopiedInfo = false;

  pageChangedSearchObs$: Subscription;

  constructor(
    private helpRequestService: HelpRequestService,
    private paymentMethodService: PaymentMethodService,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.initObservables();
  }

  ngOnDestroy() {
    if (this.pageChangedSearchObs$) {
      this.pageChangedSearchObs$.unsubscribe();
    }
  }

  onPageNumberChanged(pageNumber: number) {
    if (this.pageNumber == pageNumber) return;
    this.pageNumber = pageNumber;
    this.search();
  }

  getPhoto(photo: Photo) {
    return this.photoService.getSmall(photo.formats);
  }

  changeOpenedState(item: HelpRequest) {
    item.isOpen = !item.isOpen;
  }

  private search() {
    this.pageChangedSearchObs$ = this.helpRequestService
      .get(this.pageSize, this.pageNumber * this.pageSize)
      .pipe(delay(300))
      .subscribe((res: PaginatedResponse<HelpRequest>) =>
        this.processResponse(res)
      );
  }

  private processResponse(res: PaginatedResponse<HelpRequest>) {
    this.data = res.entities.map((entity) => {
      entity.isOpen = false;
      return entity;
    });
    this.dataSize = res.count;
  }

  private initObservables() {
    this.helpRequestService
      .get(this.pageSize, this.pageNumber * this.pageSize)
      .subscribe((res: PaginatedResponse<HelpRequest>) =>
        this.processResponse(res)
      );

    this.paymentMethodService.getAll().subscribe((paymentMethods) => {
      this.paymentMethods = paymentMethods;
    });
  }
}

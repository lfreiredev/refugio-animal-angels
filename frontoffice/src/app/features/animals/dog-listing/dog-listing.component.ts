import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, of, Subscription } from 'rxjs';
import {
  debounceTime,
  delay,
  shareReplay,
  switchMap,
  take,
} from 'rxjs/operators';
import { Photo } from 'src/app/core/models/photo.model';
import { BaseAnimal } from 'src/app/core/models/base-animal.model';
import { DogService } from '../../../core/services/dog.service';
import { PhotoService } from '../../../core/services/photo.service';
import { PaginatedResponse } from 'src/app/core/models/paginated-response.model';

@Component({
  selector: 'app-dog-listing',
  templateUrl: './dog-listing.component.html',
  styleUrls: ['./dog-listing.component.scss'],
})
export class DogListingComponent implements OnInit, OnDestroy {
  searchForm: FormGroup = new FormGroup({});
  data: BaseAnimal[];
  pageSize: number = 8;
  pageNumber: number = 0;
  dataSize: number = 0;

  termChangesObs$: Subscription;
  pageChangedSearchObs$: Subscription;

  constructor(
    private dogService: DogService,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.setForm();
    this.initObservables();
  }

  ngOnDestroy() {
    this.termChangesObs$.unsubscribe();
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

  navigateToDetail(item: BaseAnimal) {
    this.dogService.currAnimal = item;
    this.router.navigate(['animais/' + item.id]);
  }

  private resetSearch() {
    this.pageNumber = 0;
  }

  private search() {
    this.pageChangedSearchObs$ = this.dogService
      .search(
        this.searchForm.controls.term.value,
        this.pageSize,
        this.pageNumber * this.pageSize
      ).subscribe((res: PaginatedResponse<BaseAnimal>) => this.processResponse(res));
  }

  private processResponse(res: PaginatedResponse<BaseAnimal>) {
    this.data = res.entities;
    this.dataSize = res.count;
  }

  private setForm() {
    this.searchForm = new FormGroup({
      term: new FormControl(''),
    });
  }

  private initObservables() {
    this.dogService.search(
      this.searchForm.controls.term.value,
      this.pageSize,
      this.pageNumber * this.pageSize
    ).pipe(shareReplay(1))
    .subscribe((res: PaginatedResponse<BaseAnimal>) => this.processResponse(res));

    this.termChangesObs$ = this.searchForm.controls.term.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(() => {
          this.resetSearch();
          return this.dogService.search(
            this.searchForm.controls.term.value,
            this.pageSize,
            this.pageNumber * this.pageSize
          );
        }),
      ).subscribe((res: PaginatedResponse<BaseAnimal>) => this.processResponse(res));
  }
}

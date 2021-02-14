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
import { PhotoService } from '../../../core/services/photo.service';
import { PaginatedResponse } from 'src/app/core/models/paginated-response.model';
import { CatService } from 'src/app/core/services/cat.service';

@Component({
  selector: 'app-cat-listing',
  templateUrl: './cat-listing.component.html',
  styleUrls: ['./cat-listing.component.scss'],
})
export class CatListingComponent implements OnInit, OnDestroy {
  searchForm: FormGroup = new FormGroup({});
  data: BaseAnimal[];
  pageSize: number = 1;
  pageNumber: number = 0;
  dataSize: number = 0;

  termChangesObs$: Subscription;
  pageChangedSearchObs$: Subscription;

  constructor(
    private catService: CatService,
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
    this.catService.currAnimal = item;
    this.router.navigate(['animais/' + item.id]);
  }

  private resetSearch() {
    this.pageNumber = 0;
  }

  private search() {
    this.pageChangedSearchObs$ = this.catService
      .search(
        this.searchForm.controls.term.value,
        this.pageSize,
        this.pageNumber * this.pageSize
      )
      .pipe(delay(300))
      .subscribe((res: PaginatedResponse<BaseAnimal>) =>
        this.processResponse(res)
      );
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
    this.catService.search(
      this.searchForm.controls.term.value,
      this.pageSize,
      this.pageNumber * this.pageSize
    ).pipe(
      delay(300),
      shareReplay(1)
    ).subscribe((res: PaginatedResponse<BaseAnimal>) => this.processResponse(res));

    this.termChangesObs$ = this.searchForm.controls.term.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(() => {
          this.resetSearch();
          return this.catService.search(
            this.searchForm.controls.term.value,
            this.pageSize,
            this.pageNumber * this.pageSize
          );
        }),
        delay(300)
      ).subscribe((res: PaginatedResponse<BaseAnimal>) => this.processResponse(res));
  }
}

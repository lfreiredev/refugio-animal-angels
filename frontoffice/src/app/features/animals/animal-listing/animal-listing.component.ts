import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { iif, of } from 'rxjs';
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
  selector: 'app-animal-listing',
  templateUrl: './animal-listing.component.html',
  styleUrls: ['./animal-listing.component.scss'],
})
export class AnimalListingComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});
  data: BaseAnimal[];
  loadingData: boolean = false;

  // extract to service
  pageSize: number = 1;
  pageNumber: number = 0;
  totalPages: number = 0;
  pages: number[] = [];

  constructor(
    private dogService: DogService,
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setForm();

    this.route.paramMap
      .pipe(
        take(1),
        switchMap((params) => {
          return iif(
            () => params.get('type') == 'cao',
            this.dogService.search(
              this.searchForm.controls.term.value,
              this.pageSize,
              this.pageNumber * this.pageSize
            ),
            of(undefined)
          );
        }),
        delay(300),
        shareReplay(1)
      )
      .subscribe((res: PaginatedResponse<BaseAnimal>) =>
        this.processResponse(res)
      );

    this.searchForm.controls.term.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(() => {
          this.pageNumber = 0;
          this.totalPages = 0;
          return this.dogService.search(
            this.searchForm.controls.term.value,
            this.totalPages != 0
              ? Math.floor(this.totalPages / this.pageSize)
              : this.pageSize,
            this.pageNumber * this.pageSize
          );
        }),
        delay(300)
      )
      .subscribe((res: PaginatedResponse<BaseAnimal>) =>
        this.processResponse(res)
      );
  }

  private processResponse(res: PaginatedResponse<BaseAnimal>) {
    this.data = res.entities;
    this.totalPages = res.count;
    this.pages = [];
    if (Math.floor(this.totalPages / this.pageSize) == 0) {
      this.pages.push(1);
    } else {
      for (let i = 0; i < Math.floor(this.totalPages / this.pageSize); i++) {
        this.pages.push(i + 1);
      }
    }
  }

  navigateTo(index: number) {
    this.pageNumber = index;
    this.dogService
      .search(
        this.searchForm.controls.term.value,
        this.pageSize,
        this.pageNumber * this.pageSize
      )
      .subscribe((res: PaginatedResponse<BaseAnimal>) =>
        this.processResponse(res)
      );
  }

  navigateToPrevious() {
    if (this.pageNumber == 0) return;
    this.navigateTo(--this.pageNumber);
  }

  navigateToNext() {
    if (this.pageNumber == this.totalPages - 1) return;
    this.navigateTo(++this.pageNumber);
  }

  getPhoto(photo: Photo) {
    return this.photoService.getSmall(photo.formats);
  }

  private setForm() {
    this.searchForm = new FormGroup({
      term: new FormControl(''),
    });
  }
}

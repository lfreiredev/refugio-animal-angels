import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, forkJoin, iif, of } from 'rxjs';
import {
  debounceTime,
  delay,
  shareReplay,
  startWith,
  switchMap,
} from 'rxjs/operators';
import { Photo } from 'src/app/core/models/photo.model';
import { BaseAnimal } from 'src/app/core/models/base-animal.model';
import { DogService } from '../../../core/services/dog.service';
import { PhotoService } from '../../../core/services/photo.service';

@Component({
  selector: 'app-animal-listing',
  templateUrl: './animal-listing.component.html',
  styleUrls: ['./animal-listing.component.scss'],
})
export class AnimalListingComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});
  data: BaseAnimal[];
  loadingData: boolean = false;

  constructor(
    private dogService: DogService,
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setForm();

    this.route.paramMap
      .pipe(
        switchMap((params) => {
          return iif(
            () => params.get('type') == 'cao',
            this.dogService.search(this.searchForm.controls.term.value),
            of(undefined)
          );
        }),
        delay(300),
        shareReplay(1)
      )
      .subscribe((animals) => (this.data = animals as BaseAnimal[]));

    this.searchForm.controls.term.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(() => {
          this.data = undefined;
          return this.dogService.search(this.searchForm.controls.term.value);
        }),
        delay(300)
      )
      .subscribe((animals) => {
        this.data = animals as BaseAnimal[];
      });
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

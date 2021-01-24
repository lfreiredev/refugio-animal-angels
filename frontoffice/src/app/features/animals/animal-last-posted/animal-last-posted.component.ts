import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/core/models/photo.model';
import { BaseAnimal } from 'src/app/core/models/base-animal.model';
import { DogService } from '../../../core/services/dog.service';
import { PhotoService } from '../../../core/services/photo.service';

@Component({
  selector: 'app-animal-animal-last-posted',
  templateUrl: './animal-last-posted.component.html',
  styleUrls: ['./animal-last-posted.component.scss'],
})
export class AnimalLastPostedComponent implements OnInit {
  data: BaseAnimal[];

  constructor(
    private dogService: DogService,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dogService
      .getLastPosted()
      .subscribe((animals) => (this.data = animals.entities));
  }

  getPhoto(photo: Photo) {
    return this.photoService.getSmall(photo.formats);
  }

  navigateToDetail(item: BaseAnimal) {
    this.dogService.currAnimal = item;
    this.router.navigate(['animais/' + item.id]);
  }
}

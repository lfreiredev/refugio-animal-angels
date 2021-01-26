import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { BaseAnimal } from 'src/app/core/models/base-animal.model';
import { Contact } from 'src/app/core/models/contact.model';
import { Photo } from 'src/app/core/models/photo.model';
import { DogService } from 'src/app/core/services/dog.service';
import { PhotoService } from 'src/app/core/services/photo.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal: BaseAnimal;

  constructor(
    private dogService: DogService,
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.animal) {
      this.route.paramMap
        .pipe(switchMap((params) => this.dogService.getById(params.get('id'))))
        .subscribe((animal) => (this.animal = animal));
    }
  }

  getPhoto(photo: Photo) {
    return this.photoService.getSmall(photo.formats);
  }

  onContactClicked(contact: Contact) {
    switch (contact.type) {
      case 'telemovel': {
        window.location.href = `tel:${contact.description}`;
        break;
      }
      case 'email': {
        window.location.href = `mailto:${contact.description}`;
        break;
      }
      case 'rede_social': {
        window.open('https://www.facebook.com/refugioanimalangels', 'blank');
        break;
      }
    }
  }
}

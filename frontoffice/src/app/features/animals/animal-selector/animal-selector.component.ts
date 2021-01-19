import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay, shareReplay } from 'rxjs/operators';
import { DogService } from '../../../core/services/dog.service';

@Component({
  selector: 'app-animal-selector',
  templateUrl: './animal-selector.component.html',
  styleUrls: ['./animal-selector.component.scss'],
})
export class AnimalSelectorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDog() {
    this.router.navigate(['animais/pesquisa/cao']);
  }

  navigateToCat() {
    this.router.navigate(['animais/pesquisa/gato']);
  }
}

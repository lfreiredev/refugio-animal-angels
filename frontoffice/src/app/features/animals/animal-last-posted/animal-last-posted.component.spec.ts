import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalLastPostedComponent } from './animal-last-posted.component';

describe('AnimalLastPostedComponent', () => {
  let component: AnimalLastPostedComponent;
  let fixture: ComponentFixture<AnimalLastPostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalLastPostedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalLastPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

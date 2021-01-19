import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSelectorComponent } from './animal-selector.component';

describe('AnimalSelectorComponent', () => {
  let component: AnimalSelectorComponent;
  let fixture: ComponentFixture<AnimalSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

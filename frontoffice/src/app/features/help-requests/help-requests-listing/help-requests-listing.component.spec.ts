import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpRequestsListingComponent } from './help-requests-listing.component';

describe('HelpRequestsListingComponent', () => {
  let component: HelpRequestsListingComponent;
  let fixture: ComponentFixture<HelpRequestsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpRequestsListingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpRequestsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

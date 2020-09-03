import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingOfferComponent } from './landing-offer.component';

describe('LandingOfferComponent', () => {
  let component: LandingOfferComponent;
  let fixture: ComponentFixture<LandingOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPriceComponent } from './landing-price.component';

describe('LandingPriceComponent', () => {
  let component: LandingPriceComponent;
  let fixture: ComponentFixture<LandingPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

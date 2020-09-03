import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLatestComponent } from './landing-latest.component';

describe('LandingLatestComponent', () => {
  let component: LandingLatestComponent;
  let fixture: ComponentFixture<LandingLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

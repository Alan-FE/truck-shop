import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAdsComponent } from './active-ads.component';

describe('ActiveAdsComponent', () => {
  let component: ActiveAdsComponent;
  let fixture: ComponentFixture<ActiveAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTrailersComponent } from './ad-trailers.component';

describe('AdTrailersComponent', () => {
  let component: AdTrailersComponent;
  let fixture: ComponentFixture<AdTrailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTrailersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTrailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

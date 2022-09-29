import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTrailerFiltersComponent } from './advanced-trailer-filters.component';

describe('AdvancedTrailerFiltersComponent', () => {
  let component: AdvancedTrailerFiltersComponent;
  let fixture: ComponentFixture<AdvancedTrailerFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedTrailerFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedTrailerFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

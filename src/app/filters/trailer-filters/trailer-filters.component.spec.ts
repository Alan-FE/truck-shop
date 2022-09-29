import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerFiltersComponent } from './trailer-filters.component';

describe('TrailerFiltersComponent', () => {
  let component: TrailerFiltersComponent;
  let fixture: ComponentFixture<TrailerFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailerFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailerFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

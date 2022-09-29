import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksFiltersComponent } from './trucks-filters.component';

describe('TrucksFiltersComponent', () => {
  let component: TrucksFiltersComponent;
  let fixture: ComponentFixture<TrucksFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrucksFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrucksFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTrucksFiltersComponent } from './advanced-trucks-filters.component';

describe('AdvancedTrucksFiltersComponent', () => {
  let component: AdvancedTrucksFiltersComponent;
  let fixture: ComponentFixture<AdvancedTrucksFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedTrucksFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedTrucksFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsFiltersComponent } from './parts-filters.component';

describe('PartsFiltersComponent', () => {
  let component: PartsFiltersComponent;
  let fixture: ComponentFixture<PartsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

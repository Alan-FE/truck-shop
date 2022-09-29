import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimsFilterComponent } from './rims-filter.component';

describe('RimsFilterComponent', () => {
  let component: RimsFilterComponent;
  let fixture: ComponentFixture<RimsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RimsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RimsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimsDescriptionComponent } from './rims-description.component';

describe('RimsDescriptionComponent', () => {
  let component: RimsDescriptionComponent;
  let fixture: ComponentFixture<RimsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RimsDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RimsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

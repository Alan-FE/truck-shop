import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerDescriptionComponent } from './trailer-description.component';

describe('TrailerDescriptionComponent', () => {
  let component: TrailerDescriptionComponent;
  let fixture: ComponentFixture<TrailerDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailerDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAvailableTimeComponent } from './example-available-time.component';

describe('ExampleAvailableTimeComponent', () => {
  let component: ExampleAvailableTimeComponent;
  let fixture: ComponentFixture<ExampleAvailableTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAvailableTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAvailableTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

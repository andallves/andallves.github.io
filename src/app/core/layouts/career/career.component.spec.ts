import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerComponent } from 'src/app/core/layouts/career/career.component';

describe('CarrerComponent', () => {
  let component: CareerComponent;
  let fixture: ComponentFixture<CareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

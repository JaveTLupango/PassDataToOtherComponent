import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherCComponent } from './mother-c.component';

describe('MotherCComponent', () => {
  let component: MotherCComponent;
  let fixture: ComponentFixture<MotherCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

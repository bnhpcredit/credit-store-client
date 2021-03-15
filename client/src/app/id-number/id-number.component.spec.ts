import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdNumberComponent } from './id-number.component';

describe('IdNumberComponent', () => {
  let component: IdNumberComponent;
  let fixture: ComponentFixture<IdNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

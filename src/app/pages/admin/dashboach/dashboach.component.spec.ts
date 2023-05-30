import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboachComponent } from './dashboach.component';

describe('DashboachComponent', () => {
  let component: DashboachComponent;
  let fixture: ComponentFixture<DashboachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboachComponent]
    });
    fixture = TestBed.createComponent(DashboachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

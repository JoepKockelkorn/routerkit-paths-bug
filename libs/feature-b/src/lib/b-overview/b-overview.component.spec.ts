import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOverviewComponent } from './b-overview.component';

describe('BOverviewComponent', () => {
  let component: BOverviewComponent;
  let fixture: ComponentFixture<BOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BOverviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

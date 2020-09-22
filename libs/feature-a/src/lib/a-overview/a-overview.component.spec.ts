import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AOverviewComponent } from './a-overview.component';

describe('AOverviewComponent', () => {
  let component: AOverviewComponent;
  let fixture: ComponentFixture<AOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AOverviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

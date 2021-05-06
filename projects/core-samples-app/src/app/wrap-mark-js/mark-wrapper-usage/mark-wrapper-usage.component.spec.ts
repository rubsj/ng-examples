import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkWrapperUsageComponent } from './mark-wrapper-usage.component';

describe('MarkWrapperUsageComponent', () => {
  let component: MarkWrapperUsageComponent;
  let fixture: ComponentFixture<MarkWrapperUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkWrapperUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkWrapperUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

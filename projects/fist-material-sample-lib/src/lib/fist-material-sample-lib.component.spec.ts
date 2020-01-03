import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FistMaterialSampleLibComponent } from './fist-material-sample-lib.component';

describe('FistMaterialSampleLibComponent', () => {
  let component: FistMaterialSampleLibComponent;
  let fixture: ComponentFixture<FistMaterialSampleLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FistMaterialSampleLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FistMaterialSampleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FistMaterialSampleLibService } from './fist-material-sample-lib.service';

describe('FistMaterialSampleLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FistMaterialSampleLibService = TestBed.get(FistMaterialSampleLibService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MatFitnessTrackerLibService } from './mat-fitness-tracker-lib.service';

describe('MatFitnessTrackerLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatFitnessTrackerLibService = TestBed.get(MatFitnessTrackerLibService);
    expect(service).toBeTruthy();
  });
});

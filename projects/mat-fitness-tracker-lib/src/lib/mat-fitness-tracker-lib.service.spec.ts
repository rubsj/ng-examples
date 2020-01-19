import { TestBed } from '@angular/core/testing';

import { MatFitnessTrackerService } from './mat-fitness-tracker.service';

describe('MatFitnessTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatFitnessTrackerService = TestBed.get(MatFitnessTrackerService);
    expect(service).toBeTruthy();
  });
});

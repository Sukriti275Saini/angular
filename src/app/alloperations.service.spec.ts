import { TestBed } from '@angular/core/testing';

import { AlloperationsService } from './alloperations.service';

describe('AlloperationsService', () => {
  let service: AlloperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlloperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TestsrvService } from './testsrv.service';

describe('TestsrvService', () => {
  let service: TestsrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestsrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

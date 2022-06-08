import { TestBed } from '@angular/core/testing';

import { Utility } from './utility';

describe('Utility', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Utility = TestBed.get(Utility);
    expect(service).toBeTruthy();
  });
});

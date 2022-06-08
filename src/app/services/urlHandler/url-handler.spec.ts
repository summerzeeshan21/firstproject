import { TestBed } from '@angular/core/testing';

import { UrlHandler } from './url-handler';

describe('UrlHandler', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlHandler = TestBed.get(UrlHandler);
    expect(service).toBeTruthy();
  });
});

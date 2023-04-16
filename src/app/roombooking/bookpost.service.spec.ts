import { TestBed } from '@angular/core/testing';

import { BookpostService } from './bookpost.service';

describe('BookpostService', () => {
  let service: BookpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

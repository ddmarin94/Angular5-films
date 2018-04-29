import { TestBed, inject } from '@angular/core/testing';

import { FilmsServiceService } from './films.service';

describe('FilmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmsServiceService]
    });
  });

  it('should be created', inject([FilmsServiceService], (service: FilmsService) => {
    expect(service).toBeTruthy();
  }));
});

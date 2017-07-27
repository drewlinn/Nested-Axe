import { TestBed, inject } from '@angular/core/testing';

import { CurrentHeroServiceService } from './current-hero-service.service';

describe('CurrentHeroServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentHeroServiceService]
    });
  });

  it('should ...', inject([CurrentHeroServiceService], (service: CurrentHeroServiceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ViewpollService } from './viewpoll.service';

describe('ViewpollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewpollService]
    });
  });

  it('should be created', inject([ViewpollService], (service: ViewpollService) => {
    expect(service).toBeTruthy();
  }));
});

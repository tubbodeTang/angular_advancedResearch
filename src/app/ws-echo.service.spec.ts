import { TestBed, inject } from '@angular/core/testing';

import { WsEchoService } from './ws-echo.service';

describe('WsEchoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsEchoService]
    });
  });

  it('should be created', inject([WsEchoService], (service: WsEchoService) => {
    expect(service).toBeTruthy();
  }));
});

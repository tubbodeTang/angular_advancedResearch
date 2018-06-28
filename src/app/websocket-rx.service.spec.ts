import { TestBed, inject } from '@angular/core/testing';

import { WebsocketRxService } from './websocket-rx.service';

describe('WebsocketRxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketRxService]
    });
  });

  it('should be created', inject([WebsocketRxService], (service: WebsocketRxService) => {
    expect(service).toBeTruthy();
  }));
});

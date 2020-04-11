import { TestBed, inject } from '@angular/core/testing';

import { PartidaService } from './partida-service.service';

describe('JuegoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartidaService]
    });
  });

  it('should be created', inject([PartidaService], (service: PartidaService) => {
    expect(service).toBeTruthy();
  }));
});

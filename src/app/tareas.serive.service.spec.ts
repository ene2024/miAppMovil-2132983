import { TestBed } from '@angular/core/testing';

import { TareasSeriveService } from './tareas.serive.service';

describe('TareasSeriveService', () => {
  let service: TareasSeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasSeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

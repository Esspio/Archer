import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenciaPresenca } from './sequencia-presenca';

describe('SequenciaPresenca', () => {
  let component: SequenciaPresenca;
  let fixture: ComponentFixture<SequenciaPresenca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SequenciaPresenca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequenciaPresenca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

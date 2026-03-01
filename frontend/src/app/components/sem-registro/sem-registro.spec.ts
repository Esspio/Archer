import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemRegistro } from './sem-registro';

describe('SemRegistro', () => {
  let component: SemRegistro;
  let fixture: ComponentFixture<SemRegistro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemRegistro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemRegistro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

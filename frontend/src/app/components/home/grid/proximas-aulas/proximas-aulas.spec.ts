import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasAulas } from './proximas-aulas';

describe('ProximasAulas', () => {
  let component: ProximasAulas;
  let fixture: ComponentFixture<ProximasAulas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximasAulas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximasAulas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

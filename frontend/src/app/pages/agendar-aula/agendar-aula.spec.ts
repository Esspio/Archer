import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agendamento } from './agendar-aula';

describe('Agendamento', () => {
  let component: Agendamento;
  let fixture: ComponentFixture<Agendamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agendamento],
    }).compileComponents();

    fixture = TestBed.createComponent(Agendamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

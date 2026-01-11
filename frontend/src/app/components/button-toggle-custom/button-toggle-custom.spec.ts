import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleCustom } from './button-toggle-custom';

describe('ButtonToggleCustom', () => {
  let component: ButtonToggleCustom;
  let fixture: ComponentFixture<ButtonToggleCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleCustom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonToggleCustom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

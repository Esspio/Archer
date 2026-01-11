import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTemplateLogin } from './default-template-login';

describe('DefaultTemplateLogin', () => {
  let component: DefaultTemplateLogin;
  let fixture: ComponentFixture<DefaultTemplateLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultTemplateLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultTemplateLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

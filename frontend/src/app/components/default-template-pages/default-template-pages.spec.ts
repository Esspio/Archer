import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTemplatePages } from './default-template-pages';

describe('DefaultTemplatePages', () => {
  let component: DefaultTemplatePages;
  let fixture: ComponentFixture<DefaultTemplatePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultTemplatePages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultTemplatePages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

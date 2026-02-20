import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavContentGroup } from './sidenav-content-group';

describe('SidenavContentGroup', () => {
  let component: SidenavContentGroup;
  let fixture: ComponentFixture<SidenavContentGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavContentGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavContentGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

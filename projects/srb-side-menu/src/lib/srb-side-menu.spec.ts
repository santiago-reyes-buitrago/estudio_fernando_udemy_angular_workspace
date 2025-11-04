import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrbSideMenu } from './srb-side-menu';

describe('SrbSideMenu', () => {
  let component: SrbSideMenu;
  let fixture: ComponentFixture<SrbSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrbSideMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrbSideMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

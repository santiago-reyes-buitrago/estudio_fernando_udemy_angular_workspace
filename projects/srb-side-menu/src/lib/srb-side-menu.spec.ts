import { TestBed } from '@angular/core/testing';
import { SrbSideMenu } from './srb-side-menu';

describe('SrbSideMenu', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrbSideMenu],
      providers: [],
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SrbSideMenu);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});

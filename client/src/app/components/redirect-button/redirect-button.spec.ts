import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectButton } from './redirect-button';

describe('RedirectButton', () => {
  let component: RedirectButton;
  let fixture: ComponentFixture<RedirectButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirectButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

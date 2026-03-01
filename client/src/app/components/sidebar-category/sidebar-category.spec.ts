import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCategory } from './sidebar-category';

describe('SidebarCategory', () => {
  let component: SidebarCategory;
  let fixture: ComponentFixture<SidebarCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

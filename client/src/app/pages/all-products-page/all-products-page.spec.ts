import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsPage } from './all-products-page';

describe('AllProductsPage', () => {
  let component: AllProductsPage;
  let fixture: ComponentFixture<AllProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllProductsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProductsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

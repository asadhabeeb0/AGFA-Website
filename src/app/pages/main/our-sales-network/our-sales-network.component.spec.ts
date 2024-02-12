import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSalesNetworkComponent } from './our-sales-network.component';

describe('OurSalesNetworkComponent', () => {
  let component: OurSalesNetworkComponent;
  let fixture: ComponentFixture<OurSalesNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSalesNetworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSalesNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

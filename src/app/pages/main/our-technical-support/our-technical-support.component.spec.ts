import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTechnicalSupportComponent } from './our-technical-support.component';

describe('OurTechnicalSupportComponent', () => {
  let component: OurTechnicalSupportComponent;
  let fixture: ComponentFixture<OurTechnicalSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTechnicalSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTechnicalSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

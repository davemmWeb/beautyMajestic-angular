import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherServicesComponent } from './other-services.component';

describe('OtherServicesComponent', () => {
  let component: OtherServicesComponent;
  let fixture: ComponentFixture<OtherServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherServicesComponent]
    });
    fixture = TestBed.createComponent(OtherServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

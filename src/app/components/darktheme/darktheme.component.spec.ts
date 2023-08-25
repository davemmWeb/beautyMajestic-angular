import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkthemeComponent } from './darktheme.component';

describe('DarkthemeComponent', () => {
  let component: DarkthemeComponent;
  let fixture: ComponentFixture<DarkthemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkthemeComponent]
    });
    fixture = TestBed.createComponent(DarkthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

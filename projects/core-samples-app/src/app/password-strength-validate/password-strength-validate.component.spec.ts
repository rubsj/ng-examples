import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasswordStrengthValidateComponent } from './password-strength-validate.component';

describe('PasswordStrengthValidateComponent', () => {
  let component: PasswordStrengthValidateComponent;
  let fixture: ComponentFixture<PasswordStrengthValidateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordStrengthValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordStrengthValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

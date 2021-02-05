import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSample1Component } from './contact-sample1.component';

describe('ContactSample1Component', () => {
  let component: ContactSample1Component;
  let fixture: ComponentFixture<ContactSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

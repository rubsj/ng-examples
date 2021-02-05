import { Component, OnInit, OnDestroy, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Address } from '../contact-sample1/contact.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    }
  ]
})
export class AddressComponent implements OnInit, OnDestroy, ControlValueAccessor {

  addressForm: FormGroup;

  private onChange = (_: any) => { };
  private onTouched = () => { };
  destroy$ = new Subject();

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      street1: [''],
      street2: [''],
      city: [''],
      state: [''],
      zip: [''],

    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  writeValue(val: Address): void {
    if (val) {
      this.addressForm.setValue(val, { emitEvent: false });
    }

  }
  registerOnChange(fn: any): void {
    this.addressForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }

}

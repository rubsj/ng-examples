import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, Validators, AbstractControl, ValidationErrors, FormControl, FormArray } from '@angular/forms';
import { ContactService } from './contact-sample.service';


function birthDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const dateValue = new Date(control.value);
    const diff_ms = Date.now() - dateValue.getTime();
    const age_date = new Date(diff_ms);
    const age = Math.abs(age_date.getUTCFullYear() - 1970);
    if (age < 18) {
      return { minAge: true };
    }

    return null;
  }
}


function companyIncorporateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    const dateValue = new Date(control.value);
    if (Date.now() < dateValue.getTime()) {
      return { incorporate: true };
    }
    return null;
  }
}


@Component({
  selector: 'app-contact-sample1',
  templateUrl: './contact-sample1.component.html',
  styleUrls: ['./contact-sample1.component.scss']
})
export class ContactSample1Component implements OnInit {

  contactFormGroup: FormGroup;
  contactTypes = ['company', 'person']

  constructor(private formBuilder: FormBuilder, private contactSerivce : ContactService) {

  }

  ngOnInit(): void {
    this.contactFormGroup = this.setupInitialForm();

    this.contactType.valueChanges.subscribe(val => {
      if (val === 'person') {
        this.contactFormGroup.addControl('firstName', new FormControl(''));
        this.contactFormGroup.addControl('lastName', new FormControl(''));
        this.contactFormGroup.addControl('dateOfBirth', new FormControl(null, [Validators.required, birthDateValidator()]));
        this.contactFormGroup.removeControl('company');
        this.contactFormGroup.removeControl('incorportationDate');
      } else if (val === 'company') {
        this.contactFormGroup.addControl('company', new FormControl(''));
        this.contactFormGroup.addControl('incorportationDate', new FormControl(null, [Validators.required, companyIncorporateValidator()]));
        this.contactFormGroup.removeControl('firstName');
        this.contactFormGroup.removeControl('lastName');
        this.contactFormGroup.removeControl('dateOfBirth');
      }
      this.contactFormGroup.updateValueAndValidity();
    })
  }


  private setupInitialForm() : FormGroup {
    return this.formBuilder.group({
      contactType: ['person'],
      firstName: [''],
      lastName: [''],
      dateOfBirth: [null, [Validators.required, birthDateValidator()]],
      addresses: this.formBuilder.array([this.formBuilder.control({
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: ''
      })])
    });
  }

  get contactType() {
    return this.contactFormGroup.get('contactType') as FormControl;
  }

  get addresses(){
    return this.contactFormGroup.get('addresses') as FormArray;
  }

  addAddress(){
    this.addresses.push(this.formBuilder.control(null));
  }
  removeAddress(index:number){
    this.addresses.removeAt(index);
  }

  isPersonContact() {
    return this.contactType.value === 'person';
  }

  saveContact() {
    console.log('save the contact ', this.contactFormGroup);
    this.contactSerivce.addContact(this.contactFormGroup.value);
    this.contactFormGroup.patchValue({
      contactType : 'person',      
    });

    this.addresses.clear();
    this.addAddress();
   // this.contactFormGroup.setValue(this.setupInitialForm().value);
    this.contactFormGroup.updateValueAndValidity();

  }

  get contacts(){
    return this.contactSerivce.getContacts();
  }

}

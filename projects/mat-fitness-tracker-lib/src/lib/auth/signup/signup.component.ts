import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'lib-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  minAge: moment.Moment;
  maxAge: moment.Moment;

  constructor() { }

  ngOnInit() {
    this.minAge = moment().subtract(18 , 'years');
    this.maxAge = moment().subtract(100, 'years');
  }

  onSubmit(form: NgForm) {
    console.log('signup form value ', form);
  }
}

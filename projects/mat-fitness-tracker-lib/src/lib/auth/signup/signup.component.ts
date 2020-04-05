import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  minAge: moment.Moment;
  maxAge: moment.Moment;
  loading$: Observable<boolean>;

  constructor(private authService: AuthService, private uiService: UIService) { }

  ngOnInit() {
    this.minAge = moment().subtract(18, 'years');
    this.maxAge = moment().subtract(100, 'years');
    this.loading$ = this.uiService.loading$;
  }

  onSubmit(form: NgForm) {
    console.log('signup form value ', form);
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}

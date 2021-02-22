import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective, FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPWDValidator } from './password-strength.validator';
import { map } from 'rxjs/operators';
import { PasswordService } from './password.service';
import { ErrorStateMatcher } from '@angular/material/core';

class PwdErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null) : boolean{
    return control && control.invalid && control.dirty

  }
}

@Component({
  selector: 'app-password-strength-validate',
  templateUrl: './password-strength-validate.component.html',
  styleUrls: ['./password-strength-validate.component.scss']
})
export class PasswordStrengthValidateComponent implements OnInit {
  form:FormGroup;
  pwdScoreBar$: Observable<number>;
  customMatcher = new PwdErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private pwdValidator: AsyncPWDValidator) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password : ['' , {updateOn: 'change', validators: [] , asyncValidators: [this.pwdValidator.validate.bind(this.pwdValidator)] }]
    });

    this.pwdScoreBar$ = this.pwdValidator.score.pipe(
      map(score =>{
          // first, normalize value for minimum needed password strength
        score = score > PasswordService.MIN_PASSWORD_SCORE ? PasswordService.MIN_PASSWORD_SCORE :score;
        
        // then, normalize for progress bar value
        return score * (100 / PasswordService.MIN_PASSWORD_SCORE);

      })
    );
  }

}

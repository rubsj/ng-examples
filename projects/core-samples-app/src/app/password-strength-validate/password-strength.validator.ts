import { Injectable } from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    ValidationErrors
} from '@angular/forms';
import { Observable, timer, Subject, of } from 'rxjs';
import { switchMap, tap, map, debounceTime, distinctUntilChanged, first, delay } from 'rxjs/operators';
import { PasswordService } from './password.service';

@Injectable({
    providedIn: 'root'
})
export class AsyncPWDValidator implements AsyncValidator {
    private scoreEmitter$ = new Subject<number>();

    constructor(private pwdService: PasswordService) { }

    //approach 1 using timer
     /*    validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
            
            return timer(500).pipe(
                switchMap(_ => this.pwdService.getPasswordScore(control.value)),
                tap(score => this.scoreEmitter$.next(score)),
                map(score => {
                    // if password score is below threshold, validation will fail
                    if (score < PasswordService.MIN_PASSWORD_SCORE) {
                        return { unsafe: true };
                    }
                    // otherwise, no errors
                    return null;
                }),
                first() // to stop timer , though i don't see timer going on forever
            )
        } */
    
    //approach 2 using delay
    validate(control: AbstractControl): Observable<ValidationErrors | null>  {
        return of(control.value).pipe
        (
            delay(500),
            distinctUntilChanged(),
            switchMap(_ => this.pwdService.getPasswordScore(control.value)),
            tap(score => this.scoreEmitter$.next(score)),
            map(score => {
                // if password score is below threshold, validation will fail
                if (score < PasswordService.MIN_PASSWORD_SCORE) {
                    return { unsafe: true };
                }
                // otherwise, no errors
                return null;
            },
            )
        )

    }


    get score(): Observable<number> {
        return this.scoreEmitter$.asObservable();
    }
}
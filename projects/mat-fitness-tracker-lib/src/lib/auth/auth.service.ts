import { Injectable } from '@angular/core';
import { User, AuthData } from './model';
import { Subject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  private user: User;
  private authChange = new Subject<boolean>();
  userChanged$: Observable<boolean> = this.authChange.asObservable();

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
    this.router.navigate(['../fitness-tracker/../training'], { relativeTo: this.route });
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
    this.router.navigate(['/fitness-tracker/training'], { relativeTo: this.route });
     //  TODO sibling route not working as desired .. i think its bug in angular itslef
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['../fitness-tracker'], { relativeTo: this.route });
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }
}

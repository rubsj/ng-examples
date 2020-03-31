import { Injectable } from '@angular/core';
import { User, AuthData } from './model';
import { Subject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private route: ActivatedRoute, private ngFireAuth: AngularFireAuth) { }

  private isAuthenticated = false;
  private authChange = new Subject<boolean>();
  userChanged$: Observable<boolean> = this.authChange.asObservable();

  initAuthListener() {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/fitness-tracker/training'], { relativeTo: this.route });
      } else {
        this.authChange.next(false);
        this.isAuthenticated = false;
        this.router.navigate(['../fitness-tracker'], { relativeTo: this.route });
      }
    });
  }

  registerUser(authData: AuthData) {
    this.ngFireAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log('create user success');
        /*   this.authChange.next(true);
          this.router.navigate(['../fitness-tracker/../training'], { relativeTo: this.route }); */
      }).catch(err => console.log(err));

  }

  login(authData: AuthData) {
    this.ngFireAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log('signin successful');
        /*         this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/fitness-tracker/training'], { relativeTo: this.route }); */
      }).catch(err => console.log(err));
  }

  logout() {
    this.ngFireAuth.auth.signOut();
/*     this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['../fitness-tracker'], { relativeTo: this.route }); */
  }

  isAuth() {
    return this.isAuthenticated;
  }
}

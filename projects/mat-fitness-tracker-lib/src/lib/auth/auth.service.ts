import { Injectable } from '@angular/core';
import { AuthData } from './model';
import { Subject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UIService } from '../shared/ui.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private ngFireAuth: AngularFireAuth,
              private uiService: UIService) { }

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
    this.uiService.loadingStateChanged.next(true);
    this.ngFireAuth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        console.log('create user success');
        this.uiService.loadingStateChanged.next(false);
      }).catch(err => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackBar(err.message, null, 3000);
      });

  }

  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.ngFireAuth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        this.uiService.loadingStateChanged.next(false);
        console.log('signin successful');
      }).catch(err => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackBar(err.message, null, 3000);
         });
  }

  logout() {
    this.ngFireAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
}

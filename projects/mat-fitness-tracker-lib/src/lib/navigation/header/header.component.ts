import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sideNavToggle = new EventEmitter<void>();
  isAuth: boolean;
  destroy$ = new Subject();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userChanged$.pipe(
      takeUntil(this.destroy$)
      ).subscribe(val => this.isAuth = val);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onToggleSideNav() {
    this.sideNavToggle.emit();
  }

  onLogout(){
    this.authService.logout();
  }
}

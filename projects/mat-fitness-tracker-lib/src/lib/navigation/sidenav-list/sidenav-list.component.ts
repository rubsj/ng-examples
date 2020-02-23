import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'lib-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSideNav = new EventEmitter<void>();
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
  onClose() {
    this.closeSideNav.emit();
  }


  onLogout(){
    this.onClose();
    this.authService.logout();
  }

}

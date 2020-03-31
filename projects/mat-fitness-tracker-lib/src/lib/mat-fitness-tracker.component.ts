import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'lib-mat-fitness-tracker',
  templateUrl: './mat-fitness-tracker.component.html',
  styleUrls: ['./mat-fitness-tracker.component.scss']
})
export class MatFitnessTrackerComponent implements OnInit {
  @ViewChild('sideNav', { static: false }) sideNav;

  constructor(private authService : AuthService) { }

  ngOnInit() {
    console.log('mat fitness tracker called ');
    this.authService.initAuthListener();
  }
  onToggle() {
    this.sideNav.toggle();
  }

}

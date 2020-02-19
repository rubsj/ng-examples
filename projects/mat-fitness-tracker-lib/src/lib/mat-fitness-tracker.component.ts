import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-mat-fitness-tracker',
  templateUrl: './mat-fitness-tracker.component.html',
  styleUrls: ['./mat-fitness-tracker.component.scss']
})
export class MatFitnessTrackerComponent implements OnInit {
  @ViewChild('sideNav', { static: false }) sideNav;

  constructor() { }

  ngOnInit() {
    console.log('mat fitness tracker called ');
  }
  onToggle() {
    this.sideNav.toggle();
  }

}

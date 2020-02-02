import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showDashboard = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  displayDashboard() {
    this.router.navigate([{ outlets: { Dashboard: ['dashboard'] } }]);
    this.showDashboard = false;
  }

  hideDashboard() {
    this.router.navigate([{ outlets: { Dashboard: null } }]);
    this.showDashboard = true;
  }

}

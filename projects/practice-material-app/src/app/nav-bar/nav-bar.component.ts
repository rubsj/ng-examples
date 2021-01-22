import { Component, OnInit } from '@angular/core';
import { navItems } from './nav-item.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navItems = navItems;

  constructor() { }

  ngOnInit() {
  }

}

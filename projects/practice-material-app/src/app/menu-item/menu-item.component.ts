import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavItem } from '../nav-bar/nav-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItem[];
  // this viewchild is needed for menutrigger for directive
  // static true is must to initilize the submenus properly
  @ViewChild('childMenu', { static: true }) public childMenu;

  constructor() {
  }

  ngOnInit() {
  }
}

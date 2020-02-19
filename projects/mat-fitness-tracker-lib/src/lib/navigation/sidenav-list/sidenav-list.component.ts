import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onClose() {
    this.closeSideNav.emit();
  }

}

import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface SideNavToogle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Output() onToogleSideNav: EventEmitter<SideNavToogle> = new EventEmitter();
  collapse = true;
  screenWidth = 0;
  navData = navbarData;

  toogleCollapse(): void {
    this.collapse = !this.collapse;
    this.onToogleSideNav.emit({collapsed: this.collapse, screenWidth: this.screenWidth});
  }

  closeSidenav() {
    this.collapse = false;
    this.onToogleSideNav.emit({collapsed: this.collapse, screenWidth: this.screenWidth});
  }
}

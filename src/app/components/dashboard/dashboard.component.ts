import { Component } from '@angular/core';


interface SideNavToogle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToogle): void {

    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

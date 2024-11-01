import { Component } from '@angular/core';

interface SideNavToogle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tirhelo-frontend';
  
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToogle): void {

    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

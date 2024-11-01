import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  subMenu = document.getElementById("subMenu");

  openProfile: boolean = false;

  toogleMenu() {
    return this.openProfile = true;
  }
}

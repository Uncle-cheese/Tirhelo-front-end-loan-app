import { Component } from '@angular/core';
import { Tabs } from '../../tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tabs = Tabs;
}

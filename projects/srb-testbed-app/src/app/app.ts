import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SrbSideMenu,TitleColor} from 'srb-side-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SrbSideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('srb-testbed-app');
  isAuthenticated = signal(true);
  TitleColor = TitleColor
}

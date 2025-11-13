import {Component, input, output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

export enum TitleColor {
  red= 'text-red-500',
  green= 'text-green-500',
  blue= 'text-blue-500',
  yellow= 'text-yellow-500',
  purple= 'text-purple-500',
}

@Component({
  selector: 'lib-srb-side-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true,
  templateUrl: './srb-side-menu.html',
  styles: ``,
})
export class SrbSideMenu {
  title = input<string>('SRB');
  subtitle = input<string>('Corp');
  isAuthenticated = input(false);
  titleColor = input<TitleColor>(TitleColor.yellow);
  onSignOut = output();
  onSignIn = output();
}

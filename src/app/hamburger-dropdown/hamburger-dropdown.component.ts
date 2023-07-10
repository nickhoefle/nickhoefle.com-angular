import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger-dropdown',
  templateUrl: './hamburger-dropdown.component.html',
  styleUrls: ['./hamburger-dropdown.component.css']
})
export class HamburgerDropdownComponent {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

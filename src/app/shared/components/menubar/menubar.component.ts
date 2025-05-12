import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
    selector: 'app-menubar',
    imports: [MatIconModule],
    templateUrl: './menubar.component.html',
    styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  openMenu() {
    const menu = document.querySelector('.dropdown-menu')
    menu?.classList.add('show')
  }

  closeMenu() {
    const img = document.querySelector('.menu-admin')
    img?.classList.remove('show')
    img?.setAttribute('aria-expanded', 'false')

    const menu = document.querySelector('.dropdown-menu')
    menu?.classList.remove('show')
  }
}

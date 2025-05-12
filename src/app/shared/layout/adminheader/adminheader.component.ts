import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarContentComponent } from '../sidebar-content/sidebar-content.component';
import { MatMenuModule } from '@angular/material/menu';

import { MenubarComponent } from '../../components/menubar/menubar.component';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-adminheader',
    imports: [RouterOutlet, MenubarComponent, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatSidenavModule, SidebarContentComponent, RouterLink],
    templateUrl: './adminheader.component.html',
    styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {
  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? "65px" : "250px"));



}

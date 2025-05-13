import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarContentComponent } from '../sidebar-content/sidebar-content.component';
import { MatMenuModule } from '@angular/material/menu';

import { RouterLink } from '@angular/router';
import { ImgComponent } from "../../components/img/img.component";
@Component({
  selector: 'app-adminheader',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatSidenavModule, SidebarContentComponent, RouterLink, ImgComponent],
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {
  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? "65px" : "250px"));



}

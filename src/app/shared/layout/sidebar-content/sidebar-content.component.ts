import { Component, computed, Input, signal } from '@angular/core';
import { Sidebar } from '../../../interfaces/sidebar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar-content',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterLink, RouterLinkActive,NgOptimizedImage],
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.css'
})
export class SidebarContentComponent {
  sideNavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  sideItems = signal<Sidebar[]>([
    {
      icon: "dashboard",
      label: "Dashboard",
      route: "dashboard",
    },
    {
      icon: "video_library",
      label: "Content",
      route: "content",
    }
  ])

  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));
}

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminheaderComponent } from './shared/layout/adminheader/adminheader.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', component: AdminheaderComponent, children: [
      {path:'',component:HomeComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'content',component:ContentComponent},
    ]
  }
];

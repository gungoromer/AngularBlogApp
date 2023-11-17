import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogpostComponent } from './pages/blogpost/blogpost.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    title: 'Public Layout',
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'about',
    component: PublicLayoutComponent,
    title: 'Public Layout',
    children: [{ path: '', component: AboutComponent }],
  },
  {
    path: 'post',
    component: PublicLayoutComponent,
    title: 'Public Layout',
    children: [{ path: '', component: BlogpostComponent }],
  },
];

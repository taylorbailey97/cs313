import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',    component: HomeComponent },
    { path: 'contact',    component: ContactComponent },
    { path: 'gallery',    component: GalleryComponent },
    { path: 'services',    component: ServicesComponent },
    { path: 'about',    component: AboutComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ViewpollComponent } from '../viewpoll/viewpoll.component';

const routes: Routes = [
  //{ path: '', component: WelcomeComponent },
  { path: '', component: ViewpollComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

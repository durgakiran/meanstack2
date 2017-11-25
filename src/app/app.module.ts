import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { ViewpollComponent } from './viewpoll/viewpoll.component';
import { ViewpollService } from './viewpoll.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterformComponent } from './registerform/registerform.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    UserComponent,
    ViewpollComponent,
    LoginFormComponent,
    RegisterformComponent
  ],
  imports: [
    BrowserModule, MaterialModule, AppRoutingModule, FormsModule, BrowserAnimationsModule
  ],
  providers: [ViewpollService],
  bootstrap: [AppComponent],
  entryComponents: [ LoginFormComponent ]
})
export class AppModule { }

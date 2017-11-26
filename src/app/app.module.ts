import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { ViewpollComponent } from './viewpoll/viewpoll.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterformComponent } from './registerform/registerform.component';

import { ViewpollService } from './viewpoll.service';
import { UserAuthService } from './user-auth.service';
import { AuthService } from './auth.service';

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
    BrowserModule, MaterialModule, AppRoutingModule,
    FormsModule, BrowserAnimationsModule, HttpClientModule, FlashMessagesModule.forRoot()],
  providers: [ViewpollService, UserAuthService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ LoginFormComponent ]
})
export class AppModule { }

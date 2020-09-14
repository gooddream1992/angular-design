import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import {CheckboxModule} from 'primeng/checkbox';
import {AccordionModule} from 'primeng/accordion';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import {ProfileHeaderComponent} from './components/shared/profile-header/profile-header.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    HeaderComponent,
    ProfileHeaderComponent,
    SideNavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
    CheckboxModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

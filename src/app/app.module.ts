import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';
import { LandingBannerComponent } from './components/landing-banner/landing-banner.component';
import { LandingOfferComponent } from './components/landing-offer/landing-offer.component';
import { LandingPriceComponent } from './components/landing-price/landing-price.component';
import { LandingFaqComponent } from './components/landing-faq/landing-faq.component';
import { LandingContactComponent } from './components/landing-contact/landing-contact.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { LandingLatestComponent } from './components/landing-latest/landing-latest.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    LandingHeaderComponent,
    LandingBannerComponent,
    LandingLatestComponent,
    LandingOfferComponent,
    LandingPriceComponent,
    LandingFaqComponent,
    LandingContactComponent,
    LandingFooterComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/pages/landing/landing.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

// @ts-ignore
export const routes: Routes = [
  {path:"",component:LandingComponent},
  {
    path: 'account',
    children:[
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegistrationComponent},
    ]
  },
  {
    path: 'users', component: ProfileComponent,
    children:[
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

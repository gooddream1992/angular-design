import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { Router } from "@angular/router";
import { RegistrationService } from "../../../services/registration/registration.service";
import { RegistrationRequest } from "../../../models/registration.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']})
export class RegistrationComponent {

  constructor(private registrationService: RegistrationService, private router: Router) {
/*     if (authService.currentUserValue) {
      this.router.navigate(['/']);
    } */
  }

  isConditionAccepted: boolean = false;

  registrationForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(2)
    ]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      Validators.pattern(/\d/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
    ]),
    'current-password': new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(6),
      Validators.pattern(/\d/),
      Validators.pattern(/[a-z]/),
      Validators.pattern(/[A-Z]/)
    ])
  });

  onChangeConditionTerms(event: MatCheckboxChange){
    this.isConditionAccepted = event.checked;
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  register(){
    this.registrationForm.value["terms"]=this.isConditionAccepted;
    let registration = new RegistrationRequest(this.registrationForm.value);
    return this.registrationService.register(registration).subscribe(value => {
      console.log("data successfully received. ");
      this.router.navigate(['/account', 'activate'], {queryParams: {email: value.email}});
    },
    error => {
      console.log("request failure: ");
      console.log(error);
      //this.router.navigate(['/']);
    });
  }
}

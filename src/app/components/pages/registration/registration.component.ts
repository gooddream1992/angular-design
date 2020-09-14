import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
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

  registerFormErrors:any = {};
  startRegisterProcessing:boolean = false;
  termsAccepted: boolean = false;

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

  onChangeConditionTerms(event: any){
    this.termsAccepted = event.checked;
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  register(){
    this.getFormValidationErrors();
    if(this.registrationForm.status == 'VALID') {

      this.registrationForm.value["terms"]=this.termsAccepted;
      let registration = new RegistrationRequest(this.registrationForm.value);
      setTimeout(() => {
        this.startRegisterProcessing = false;
        this.router.navigate(['/users', 'profile']);
      }, 1000);

      //COMMENTED CODE FOR REGISTER API TO BE INTEGRATED LATER
      // return this.registrationService.register(registration).subscribe(value => {
      //   this.router.navigate(['/account', 'activate'], {queryParams: {email: value.email}});
      // },
      // error => {
      // });
    }
  }

  getFormValidationErrors() {
    this.registerFormErrors = {};
    Object.keys(this.registrationForm.controls).forEach(key => {  
      const controlErrors: ValidationErrors = this.registrationForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          
          if(key == 'fullName') 
            this.registerFormErrors.fullName = (keyError == 'required') ? 'Full name is required.' : 'Full name must be between 2 and 50 characters. ';
          if(key == 'mobile') 
            this.registerFormErrors.mobile = (keyError == 'required') ? 'Mobile number is required.' : (keyError == 'pattern' && controlErrors[keyError].requiredPattern.indexOf("d/") != -1) ? 'Mobile number must contain numbers only.' : 'Mobile number must not be greater than 25 digits.';
          if(key == 'email') 
            this.registerFormErrors.email = (keyError == 'required') ? 'Email is required' : (keyError == 'pattern') ? 'Please enter a valid email address.' : 'Incorrect email address.';
          if(key == 'current-password') 
            this.registerFormErrors.password = (keyError == 'required') ? 'Password is required' : (keyError == 'pattern' && controlErrors[keyError].requiredPattern == '/[A-Z]/') ? 'Your password must contain atleast one uppercase letter (ex: A, B, etc.)' : (keyError == 'pattern' && controlErrors[keyError].requiredPattern == '/[a-z]/') ? 'Your password must contain atleast one lowercase letter (ex: a, b, etc.)' : (keyError == 'pattern' && controlErrors[keyError].requiredPattern.indexOf("d/") != -1) ? 'Your password must contain at least one number digit (ex: 0, 1, 2, 3, etc.)' : 'Your password must be between 6 and 50 characters.';
        });
      }
    });
  }
}

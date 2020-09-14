import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from "../../../services/login/login.service";
import { LoginRequest, LoginResponse } from "../../../models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private loginService: LoginService, private router: Router) { }

  persistSession: boolean = false;
  loginFormErrors:any = {};
  startLoginProcessing:boolean = false;
  loginForm = new FormGroup({
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

  login(){
    this.getFormValidationErrors();
    if(this.loginForm.status == 'VALID') {
      this.startLoginProcessing = true;
      this.loginForm.value["session"] =  this.persistSession;
      let loginRequest = new LoginRequest(this.loginForm.value);
      setTimeout(() => {
        this.startLoginProcessing = false;
        this.router.navigate(['/users', 'profile']);
      }, 1000);
      //COMMENTED CODE FOR LOGIN API TO BE INTEGRATED LATER
      // this.loginService.login(loginRequest).subscribe(value => {
      //   this.startLoginProcessing = false;
      //   this.router.navigate(['/users', 'profile']);
      // },
      // error => {
      //   this.startLoginProcessing = false;
      // });
    }

  }

  getFormValidationErrors() {
    this.loginFormErrors = {};
    Object.keys(this.loginForm.controls).forEach(key => {  
      const controlErrors: ValidationErrors = this.loginForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          if(key == 'email') this.loginFormErrors.email = (keyError == 'required') ? 'Email is required' : (keyError == 'pattern') ? 'Please enter a valid email address.' : 'Incorrect email address.';
          if(key == 'current-password') this.loginFormErrors.password = (keyError == 'required') ? 'Password is required' : (keyError == 'pattern' && controlErrors[keyError].requiredPattern == '/[A-Z]/') ? 'Your password must contain atleast one uppercase letter (ex: A, B, etc.)' : (keyError == 'pattern' && controlErrors[keyError].requiredPattern == '/[a-z]/') ? 'Your password must contain atleast one lowercase letter (ex: a, b, etc.)' : (keyError == 'pattern' && controlErrors[keyError].requiredPattern.indexOf("d/") != -1) ? 'Your password must contain at least one number digit (ex: 0, 1, 2, 3, etc.)' : 'Your password must be between 6 and 50 characters.';
        });
      }
    });
  }

  onChangeConditionTerms(event: any){
    this.persistSession = event.checked;
  }


}

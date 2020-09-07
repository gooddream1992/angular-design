import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from "../../../services/login/login.service";
import { LoginRequest, LoginResponse } from "../../../models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  persistSession: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

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
    this.loginForm.value["session"] =  this.persistSession;
    console.log(this.loginForm.value);
    let loginRequest = new LoginRequest(this.loginForm.value);
    return this.loginService.login(loginRequest).subscribe(value => {
      console.log("data successfully received. ");
      this.router.navigate(['/users', 'profile']);
    },
    error => {
      console.log("request failure: ");
      console.log(error);
      //this.router.navigate(['/']);
    });

  }

  onChangeConditionTerms(event: MatCheckboxChange){
    this.persistSession = event.checked;
    console.log(this.persistSession);
  }


}

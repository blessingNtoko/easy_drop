import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public emailRegex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
  public loginForm = new FormGroup({
    username: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(this.emailRegex)
    ])),
    password: new FormControl('', Validators.required)
  });

  loginFormValidationErrors = {
    username: [
      { type: 'required', message: 'Username is required' },
      { type: 'pattern', message: 'Username must your email'}
    ],
    password: [
      { type: 'required', message: 'Password is required' }
    ]
  };

  constructor() { }

  public onSubmit() {
    console.error('[Login Details] =>', this.loginForm.value);
  }

  ngOnInit() {
  }

}

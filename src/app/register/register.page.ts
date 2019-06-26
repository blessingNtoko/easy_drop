import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public emailRegex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
  public registrationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(this.emailRegex)
    ])),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    vehicleDetails: new FormGroup({
      make: new FormControl('', Validators.required),
      seriesName: new FormControl('', Validators.required),
      licencePlate: new FormControl('', Validators.required),
      vehIdentificationNumber: new FormControl('', Validators.required),
      vehRegNum: new FormControl('', Validators.required),
      vehCategory: new FormControl('', Validators.required),
      vehStatus: new FormControl('', Validators.required),
      grossVehMass: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    }),
  });

  registerFormValidationErrors = {
    firstName: [
      { type: 'required', message: 'Username is required' },
      { type: 'pattern', message: 'Username must your email' }
    ],
    lastName: [
      { type: 'required', message: 'Password is required' }
    ],
    email: [
      { type: 'required', message: 'Password is required' }
    ],
    password: [
      { type: 'required', message: 'Password is required' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Password is required' }
    ],
    make: [
      { type: 'required', message: 'Password is required' }
    ],
    seriesName: [
      { type: 'required', message: 'Password is required' }
    ],
    licencePlate: [
      { type: 'required', message: 'Password is required' }
    ],
    vehIdentificationNumber: [
      { type: 'required', message: 'Password is required' }
    ],
    vehRegNum: [
      { type: 'required', message: 'Password is required' }
    ],
    vehCategory: [
      { type: 'required', message: 'Password is required' }
    ],
    vehStatus: [
      { type: 'required', message: 'Password is required' }
    ],
    grossVehMass: [
      { type: 'required', message: 'Password is required' }
    ],
    description: [
      { type: 'required', message: 'Password is required' }
    ]
  };

  constructor() { }

  public onSubmit() {
    console.error('[Registration Form] =>', this.registrationForm.value);
  }

  ngOnInit() {
  }

}

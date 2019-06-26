import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {

  public emailRegex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
  public paymentDetailsForm = new FormGroup({
    username: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(this.emailRegex)
    ])),
    password: new FormControl('', Validators.required)
  });

  constructor() { }

  public onSubmit() {
    console.error('[Payment Details Form] =>', this.paymentDetailsForm.value);
  }

  ngOnInit() {
  }

}

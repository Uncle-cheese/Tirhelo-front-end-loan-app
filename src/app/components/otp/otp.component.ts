import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',

})
export class OtpComponent {

  userForm: FormGroup;
  isFormSubmitted: boolean = false;

  emailAddress: string = 'nhlanhlamavundla1@gmail.com';
  mobileNumber: string = '+27671130709';

  constructor(
    private ngxService: NgxUiLoaderService,
    private router: Router,
  ) 
  {
    this.userForm = new FormGroup({
      otpNumber: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    })
  }

  onSubmit() {
    this.ngxService.start();
    
    if (this.userForm.valid) {
      this.ngxService.stop();
      this.isFormSubmitted = true;
      this.router.navigate(['/dashboard'])
    }
    // const isFormValid = this.userForm.valid
  }
}

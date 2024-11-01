import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SnackbarService } from '../../services/snackbar.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../../shared/global-constants';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userForm: any = FormGroup;
  isFormSubmitted: boolean = false;
  responseMessage: any;
  hide = true;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
    private dialog:MatDialog  
  )
             
  {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(3)]),
      rememberMe: new FormGroup("")
    });
  }

  handleForgotPasswordAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(ForgotPasswordComponent,dialogConfig);
  }

  onSubmit() {
    this.ngxService.start();
    const isFormValid = this.userForm.valid

    var formData = this.userForm.value;

    var data = {
      email: formData.email,
      password: formData.password
    }
    this.userService.login(data).subscribe((res:any) => {
      this.ngxService.stop();
      localStorage.setItem('token',res.token)
      this.router.navigate(['/otp']);
    }, (error) => {
      
      if (error.error?.message) {
        
        this.responseMessage = error.error?.message
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackBarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });
    // this.isFormSubmitted = true;
  }
}

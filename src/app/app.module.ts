import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { OtpComponent } from './components/otp/otp.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule }  from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MaskPipe } from './pipe/mask.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { LoansComponent } from './components/loans/loans.component';
import { CustomerManagementComponent } from './components/customer-management/customer-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BodyComponent } from './components/body/body.component';
import { ActiveTradesComponent } from './pages/active-trades/active-trades.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: "Loading...",
  textColor: "#FFFFFF",
  textPosition: "center-center",
  bgsColor: "#6DBE46",
  fgsColor: "#6DBE46",
  fgsType: SPINNER.fadingCircle,
  fgsSize: 100,
  hasProgressBar: false
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent,
    ForgotPasswordComponent,
    MaskPipe,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    LoansComponent,
    CustomerManagementComponent,
    UserManagementComponent,
    PaymentComponent,
    SettingsComponent,
    BodyComponent,
    // ActiveTradesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ActiveTradesComponent
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OtpComponent } from './components/otp/otp.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { CustomerManagementComponent } from './components/customer-management/customer-management.component';
import { LoansComponent } from './components/loans/loans.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },

  {
    path: 'login', component:LoginComponent
  },

  {
    path: 'otp', component:OtpComponent
  },

  {
    path: '',
    component: SidebarComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'setting', component:SettingsComponent},
      {path: 'payment', component:PaymentComponent},
      {path: 'user-management', component:UserManagementComponent},
      {path: 'cust-management',component:CustomerManagementComponent},
      {path: 'loan-applications', component: LoansComponent},
      {path:'home', component:HomeComponent},
      {path: 'loans', component: LoansComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

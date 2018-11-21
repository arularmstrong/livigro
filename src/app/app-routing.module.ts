import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InComponent } from './in/in.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { RegisteredComponent } from './user/registered/registered.component';
import { OtpComponent } from './user/otp/otp.component';
import { PasswordComponent } from './user/password/password.component';
import { ViewpackageComponent } from './package/viewpackage/viewpackage.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { PackageComponent } from './package/listpackage/listpackage.component';


const routes: Routes = [
  { path: '', redirectTo: '/in', pathMatch: 'full' },
  { path: 'in', component: InComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registered', component: RegisteredComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'viewpackage', component: ViewpackageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'package', component: PackageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

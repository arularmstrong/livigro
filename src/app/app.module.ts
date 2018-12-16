import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WindowRefService } from './payment/window-ref.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AutoCompleteModule } from 'ng5-auto-complete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule,MatFormFieldModule } from '@angular/material';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import 'hammerjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { InComponent } from './in/in.component';
import { LoginComponent } from './user/login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PackageComponent } from './package/listpackage/listpackage.component';
import { RegisterComponent } from './user/register/register.component';
import { ViewpackageComponent } from './package/viewpackage/viewpackage.component';
import { SearchComponent } from './search/search.component';
import { OtpComponent } from './user/otp/otp.component';
import { PasswordComponent } from './user/password/password.component';
import { RegisteredComponent } from './user/registered/registered.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { MybookingsComponent } from './user/mybookings/mybookings.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    InComponent,
    LoginComponent,
    PaymentComponent,
    PackageComponent,
    RegisterComponent,
    ViewpackageComponent,
    SearchComponent,
    OtpComponent,
    PasswordComponent,
    RegisteredComponent,
    EditProfileComponent,
    MybookingsComponent,
    ContactComponent,
    AboutComponent,
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DropDownsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    NgxSpinnerModule,
    AutoCompleteModule,
    NgbModule.forRoot()
  ],
  providers: [ WindowRefService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
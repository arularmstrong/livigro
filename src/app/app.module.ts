import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
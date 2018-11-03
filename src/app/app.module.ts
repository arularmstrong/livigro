import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ListPackageComponent } from './package/list-package/list-package.component';
import { ViewPackageComponent } from './package/view-package/view-package.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { BookingComponent } from './package/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ListPackageComponent,
    ViewPackageComponent,
    SearchComponent,
    FooterComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

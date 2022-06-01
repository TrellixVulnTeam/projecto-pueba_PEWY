import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NavigationComponent } from './components/pages/navigation/navigation.component';
import { PrescriptionComponent } from './components/pages/prescription/prescription.component';
import { UserComponent } from './components/user/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    CustomerComponent,
    DashboardComponent,
    NavigationComponent,
    PrescriptionComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

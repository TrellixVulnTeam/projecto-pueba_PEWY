import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NavigationComponent } from './components/pages/navigation/navigation.component';
import { PrescriptionComponent } from './components/pages/prescription/prescription.component';
import { UserComponent } from './components/user/user/user.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'',
    component: NavigationComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'home',
        component: DashboardComponent
      },
      {
        path:'user',
        component: UserComponent
      },
      {
        path:'customer',
        component: CustomerComponent
      },
      {
        path:'prescription',
        component: PrescriptionComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

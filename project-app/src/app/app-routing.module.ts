import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {LandingComponent} from './landing/landing.component';
import { Routes, RouterModule } from '@angular/router';
// import { AppModule } from 'mdb-angular-free-7.5.0/projects/mdb-demo/src/app/app.module';
// import { AppComponent } from 'mdb-angular-free-7.5.0/projects/mdb-demo/src/app/app.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // {enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

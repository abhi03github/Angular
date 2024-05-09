import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [//this is important part of out syllabus understood
  {component:HomeComponent,path:"home"},
  {component:ProfileComponent,path:"profile"},
  {component:RegisterComponent,path:"register"},
  {component:LoginComponent,path:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

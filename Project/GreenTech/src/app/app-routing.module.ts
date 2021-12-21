import { PostDetailComponent } from './general/post-detail/post-detail.component';
import { ProfileComponent } from './general/profile/profile.component';
import { HomeComponent } from './general/home/home.component';
import { UpdateAnimalComponent } from './general/update-animal/update-animal.component';
import { RegisterComponent } from './general/register/register.component';
import { LoginComponent } from './general/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnimalComponent } from './general/add-animal/add-animal.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"post/id/edit",component:UpdateAnimalComponent},
  {path:"home",component:HomeComponent},
  {path:"post/add",component:AddAnimalComponent},
  {path:"user/profile",component:ProfileComponent},
  {path:"post/:id",component:PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

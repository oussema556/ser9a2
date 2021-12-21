import { PostServiceService } from './services/post-service.service';
import { UserServiceService } from './services/user-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { DropdownComponent } from './general/navbar/dropdown/dropdown.component';
import { SidebarComponent } from './general/sidebar/sidebar.component';
import { ChecklistComponent } from './general/sidebar/checklist/checklist.component';
import { PostListComponent } from './general/post-list/post-list.component';
import { PostComponent } from './general/post-list/post/post.component';
import { ProfileComponent } from './general/profile/profile.component';
import { AddAnimalComponent } from './general/add-animal/add-animal.component';
import { UpdateAnimalComponent } from './general/update-animal/update-animal.component';
import { PostDetailComponent } from './general/post-detail/post-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { HomeComponent } from './general/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownComponent,
    SidebarComponent,
    ChecklistComponent,
    PostListComponent,
    PostComponent,
    ProfileComponent,
    AddAnimalComponent,
    UpdateAnimalComponent,
    PostDetailComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserServiceService,
    PostServiceService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

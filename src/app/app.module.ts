import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';

import { RouterModule } from '@angular/router';
import {routing} from './app.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user.service';
import {AuthenticationService} from './service/auth.service';
import { HomeComponent } from './home/home.component';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  //  BsDropdownModule.forRoot(),
  ],
  providers: [AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

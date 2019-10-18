import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthRoutingModuleModule } from './auth-routing-module.module';
import {UserService} from '../services/user.service';
import {UserDataService} from '../user-data.service';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModuleModule
  ],
  providers: [UserService, UserDataService]
})
export class AuthModule { }

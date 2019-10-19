import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
// import { AuthRoutingModuleModule } from './auth-routing-module.module';
import {UserService} from '../services/user.service';
import {UserDataService} from '../user-data.service';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{ path: '', component: AuthComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}];

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class AuthModule { }

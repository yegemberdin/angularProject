import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { NavbarComponent } from './navbar/navbar.component';
import {AuthGuard} from './guards/index';
import {UserService} from './services/user.service';
import {AlertService} from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, UserService, AlertService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

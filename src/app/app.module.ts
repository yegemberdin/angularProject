import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {AuthGuard} from './guards/index';
import {UserService} from './services/user.service';
import {AlertService} from './services/alert.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './AuthInterceptor';
import {NotFoundPageComponent} from './shared/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard, UserService, AlertService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

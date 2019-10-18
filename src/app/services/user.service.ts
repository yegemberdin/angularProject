import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AlertService} from './alert.service';
import {User} from '../User';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(public alertService: AlertService) {
  }

  private user: User;

  login(username: string, password: string): Observable<any> {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user.username === username && this.user.password === password) {
      this.alertService.success('Login Successfull', false);
      localStorage.setItem('user', JSON.stringify(this.user));
      return of(true);
    } else {
      this.alertService.error('Invalid Login', false);
      localStorage.removeItem('user');
      return of(false);
    }
  }

  register(userData: User): Observable<any> {
    this.alertService.success('Register Successfull. You can login with the details as submitted', true);
    localStorage.setItem('user', JSON.stringify(userData));
    return of(true);
  }
}

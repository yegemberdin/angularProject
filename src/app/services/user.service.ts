import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {User} from '../User';

@Injectable({providedIn: 'root'})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, {username, password})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  register(userData: User): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, {userData})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

// import {Injectable} from '@angular/core';
// import {Observable, of} from 'rxjs';
// import {AlertService} from './alert.service';
// import {User} from '../User';
//
// @Injectable({
//   providedIn: 'root',
// })
//
// export class UserService {
//   constructor(public alertService: AlertService) {
//   }
//
//   private user: User;
//
//   login(username: string, password: string): Observable<any> {
//     this.user = JSON.parse(localStorage.getItem('user'));
//     if (this.user.username === username && this.user.password === password) {
//       this.alertService.success('Login Successfull', false);
//       localStorage.setItem('user', JSON.stringify(this.user));
//       return of(true);
//     } else {
//       this.alertService.error('Invalid Login', false);
//       localStorage.removeItem('user');
//       return of(false);
//     }
//   }
//
//   register(userData: User): Observable<any> {
//     this.alertService.success('Register Successfull. You can login with the details as submitted', true);
//     localStorage.setItem('user', JSON.stringify(userData));
//     return of(true);
//   }
// }

import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userDataSubject = new BehaviorSubject('anonymous')
  userData$: Observable<string>;


  constructor() {
    this.userData$ = this.userDataSubject.asObservable();
  }
  getUserDataSubject() {
    return this.userDataSubject;
  }
  //
  // setUserData = (user) => {
  //   console.log(user);
  //   this.userDataSubject.next(user);
  // }
}

import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData$: Observable<any>;
  public userDataSubject = new Subject<any>();

  constructor() {
    this.userData$ = this.userDataSubject.asObservable();
  }

  setUserData = (user) => {
    this.userDataSubject.next(user);
  }
}

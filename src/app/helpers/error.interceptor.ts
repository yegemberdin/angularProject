import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: UserService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        console.log('401 oops');
        this.authenticationService.logout();
        this.router.navigateByUrl('/auth')
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../User';
import {environment} from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class GalleryService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }
}

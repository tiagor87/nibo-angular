import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../shared/user';
import { Observable, BehaviorSubject, Subject } from 'rxjs/';

@Injectable()
export class UserService {
  private user: Subject<User>;
  user$: Observable<User>;
  constructor(private httpClient: HttpClient) {
    this.user = new Subject<User>();
    this.user$ = this.user.asObservable();
  }

  getById(id: number) {
    return this.httpClient
      .get<User>(`${environment.baseUrl}/users/${id}`)
      .do(user => this.user.next(user));
  }
}

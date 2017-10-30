import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../shared/user';
import { Observable, BehaviorSubject } from 'rxjs/';

@Injectable()
export class UserService {
  private user: BehaviorSubject<User>;
  user$: Observable<User>;
  private token: BehaviorSubject<string>;
  token$: Observable<string>;
  constructor(private httpClient: HttpClient) {
    this.user = new BehaviorSubject<User>(this.getUser());
    this.user$ = this.user.asObservable();
    this.token = new BehaviorSubject<string>(this.getToken());
    this.token$ = this.token.asObservable();
  }

  signIn(user: User) {
    return this.httpClient
      .post<string>(`${environment.baseUrl}`, user)
      .do(token => {
        this.setToken(token);
        this.token.next(token);
      })
      .do(() => {
        this.setUser(user);
        this.user.next(user);
      });
  }

  validateToken() {
    const token = this.getToken();
    return this.httpClient.get<boolean>(
      `${environment.baseUrl}/authentication`,
      {}
    );
  }

  private getUser() {
    const userJSON = window.localStorage.getItem(
      environment.storage.authenticatedUser
    );
    return userJSON
      ? JSON.parse(userJSON)
      : {
          email: '',
          password: ''
        };
  }

  private setUser(user: User) {
    const userJSON = JSON.stringify({ ...user, password: '' });
    window.localStorage.setItem(
      environment.storage.authenticatedUser,
      userJSON
    );
  }

  private getToken() {
    return window.localStorage.getItem(environment.storage.accessToken);
  }

  private setToken(token: string) {
    window.localStorage.setItem(environment.storage.accessToken, token);
  }
}

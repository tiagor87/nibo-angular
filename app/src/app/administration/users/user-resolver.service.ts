import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/';

import { User } from '../../shared/user';
import { UserService } from '../../core/user.service';

@Injectable()
export class UserResolverService implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> {
    return this.userService.getById(route.params['id']);
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/user';
import { Observable } from 'rxjs/';
import { UserService } from '../../../core/user.service';

@Component({
  selector: 'nibo-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<User>;
  constructor(private route: Acti) {}

  ngOnInit() {
    this.user$ = this.userService.user$;
    this.u;
  }
}

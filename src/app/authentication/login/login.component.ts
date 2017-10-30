import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../core/user.service';
import { User } from '../../shared/user';

import { Subscription, Observable } from 'rxjs/';

@Component({
  selector: 'nibo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  authenticatedUser$: Observable<User>;
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.createForm();
    this.authenticatedUser$ = this.userService.user$.do(user =>
      this.loginForm.setValue(user)
    );
    this.subscription = this.userService.token$.subscribe(token => {
      if (token) {
        this.router.navigate(['admin']);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }
}

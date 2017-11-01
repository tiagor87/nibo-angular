import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/user';
import { AuthenticationService } from '../../core/authentication.service';
import { MessagesService } from '../../core/messages.service';

import { Subscription, Observable } from 'rxjs/';

@Component({
  selector: 'nibo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  userSubscription: Subscription;
  tokenSubscription: Subscription;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.createForm();
    this.userSubscription = this.authenticationService.user$
      .do(user => this.loginForm.setValue(user))
      .subscribe(() => {});
    this.tokenSubscription = this.authenticationService.token$.subscribe(
      token => {
        this.messagesService.success('Welcome, you are now authenticated');
        this.router.navigate(['admin']);
      },
      error => this.messagesService.error(error.message)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.tokenSubscription.unsubscribe();
  }

  signIn() {
    this.authenticationService
      .signIn(this.loginForm.value)
      .subscribe(
        () =>
          this.messagesService.success('Welcome, you are now authenticated'),
        error => alert(error.message)
      );
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

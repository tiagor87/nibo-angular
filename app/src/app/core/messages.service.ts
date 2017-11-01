import { Injectable } from '@angular/core';
import { Message } from '../shared/message';
import { Observable, Subject, Subscription } from 'rxjs/';

@Injectable()
export class MessagesService {
  private clearTimer: Subscription;
  private message: Subject<Message>;
  message$: Observable<Message>;
  constructor() {
    this.message = new Subject<Message>();
    this.message$ = this.message.asObservable();
  }

  info(message: string) {
    this.message.next({
      type: 'alert-info',
      text: message
    });
  }

  error(message: string) {
    this.message.next({
      type: 'alert-danger',
      text: message
    });
  }

  success(message: string) {
    this.message.next({
      type: 'alert-success',
      text: message
    });
    this.clearTimer = Observable.timer(5000).subscribe(() => this.clear());
  }

  clear() {
    if (this.clearTimer && !this.clearTimer.closed) {
      this.clearTimer.unsubscribe();
    }
    this.message.next();
  }
}

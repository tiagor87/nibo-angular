import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../core/messages.service';
import { Observable } from 'rxjs/';
import { Message } from '../message';

@Component({
  selector: 'nibo-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  message$: Observable<Message>;
  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.message$ = this.messagesService.message$;
  }

  close() {
    this.messagesService.clear();
  }
}

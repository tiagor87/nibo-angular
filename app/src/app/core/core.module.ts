import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { AuthenticatedGuard } from './authenticated.guard';
import { MessagesService } from './messages.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [UserService, AuthenticatedGuard, MessagesService, AuthenticationService]
})
export class CoreModule {}

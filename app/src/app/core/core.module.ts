import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { AuthenticatedGuard } from './authenticated.guard';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [UserService, AuthenticatedGuard]
})
export class CoreModule {}

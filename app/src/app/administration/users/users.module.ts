import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserResolverService } from './user-resolver.service';

@NgModule({
  imports: [CommonModule, UsersRoutingModule],
  declarations: [UsersComponent, UserListComponent, UserComponent],
  providers: [UserResolverService]
})
export class UsersModule {}

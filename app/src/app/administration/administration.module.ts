import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [CommonModule, AdministrationRoutingModule, UsersModule],
  declarations: [AdministrationComponent, DashboardComponent]
})
export class AdministrationModule {}

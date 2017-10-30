import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [UserService]
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [AuthenticationRoutingModule, ReactiveFormsModule],
  declarations: [LoginComponent]
})
export class AuthenticationModule {}

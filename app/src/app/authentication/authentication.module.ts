import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [AuthenticationRoutingModule, ReactiveFormsModule],
  declarations: [AuthenticationComponent, LoginComponent]
})
export class AuthenticationModule {}

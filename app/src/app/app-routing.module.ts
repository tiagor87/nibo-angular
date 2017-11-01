import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticatedGuard } from './core/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren:
          './authentication/authentication.module#AuthenticationModule'
      },
      {
        path: 'admin',
        canActivate: [AuthenticatedGuard],
        loadChildren:
          './administration/administration.module#AdministrationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

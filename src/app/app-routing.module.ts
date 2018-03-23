import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordlessAuthComponent } from './passwordless-auth/passwordless-auth.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PasswordlessAuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent as LoginPageComponent } from './pages/login/login.component';
import { UsersComponent as UsersPageComponent } from './pages/users/users.component';
import { AuthGuard } from './guards';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: UsersPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

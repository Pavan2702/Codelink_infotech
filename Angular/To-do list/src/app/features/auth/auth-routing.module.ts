import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TaskListComponent } from '../tasks/components/task-list/task-list.component';
import { AlreadyLoggedInGuard, AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent ,canActivate: [AlreadyLoggedInGuard]},
  { path: 'register', component: RegisterComponent, canActivate:[AlreadyLoggedInGuard]},
  {path: 'tasks', component: TaskListComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

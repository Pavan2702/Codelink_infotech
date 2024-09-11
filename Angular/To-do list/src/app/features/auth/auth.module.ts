import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksModule } from '../tasks/tasks.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Add spinner module

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    TasksModule,
    MatProgressSpinnerModule,
  ],
})
export class AuthModule {}

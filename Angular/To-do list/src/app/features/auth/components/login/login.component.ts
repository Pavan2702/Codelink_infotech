import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value; // Extract email and password

      this.authService
        .login(email, password) // Pass the two arguments separately
        .then(() => {
          this.isLoading = false;
          this.toastr.success('Login successful!');
          this.router.navigate(['/tasks']);
        })
        .catch((err) => {
          console.error('Login failed:', err);
          this.toastr.error('Login failed. Please try again.', 'Error');
          this.isLoading = false;
        });
    }
  }

}

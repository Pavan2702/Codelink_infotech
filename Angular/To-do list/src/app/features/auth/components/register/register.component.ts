import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Note the correct `styleUrls` property name
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    }, { });
  }

  onSubmit() {
    if (this.registerForm.valid && !this.isLoading) {
      this.isLoading = true;

      const { name, email, password } = this.registerForm.value; // Extract name, email, and password

      this.authService
        .register(email, password, name) // Pass the three arguments separately
        .then(() => {
          this.isLoading = false;
          this.toastr.success('Registration successful!');
          this.router.navigate(['/tasks']);
        })
        .catch((err) => {
          console.error('Registration failed:', err);
          this.toastr.error('Registration failed. Please try again.', 'Error');
          this.isLoading = false;
        });
    }
  }

}

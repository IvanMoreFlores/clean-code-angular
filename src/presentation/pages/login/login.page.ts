import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginUseCase } from '../../../application/use-cases/login.use-case';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, CommonModule,ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage {
  form: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly loginUseCase: LoginUseCase,
    private readonly route: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.loginUseCase.login('emilys', password).subscribe(
        (user) => {
          console.log('Login successful', user);
          this.errorMessage = null; // Clear any previous error message
          this.route.navigate(['/home']); // Navigate to the home page
          // Handle successful login (e.g., navigate to another page)
        },
        (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid email or password';
        }
      );
    }
  }
}

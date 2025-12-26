import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FormValidators } from '../../lib/prime-preset/validators/form-validators';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { trigger, transition, style, animate } from '@angular/animations';
import { User } from '../../core/model/user.model';

@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './login.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class Login {
  fb = inject(FormBuilder);
  router = inject(Router);
  loginLoading = signal(false);
  authService = inject(AuthService);
  messageService = inject(MessageService);

  readonly form = this.fb.group({
    username: ['', FormValidators.username()],
    password: ['', FormValidators.password()],
    rememberMe: [false],
  });

  async submit(): Promise<void> {
    if (this.form.invalid || this.loginLoading()) return;

    this.loginLoading.set(true);
    const { username, password, rememberMe } = this.form.getRawValue();

    try {
      const LoginResponse = await this.authService.login({
        username: username ?? '',
        password: password ?? '',
      });

      if (!LoginResponse.isSuccess) {
        throw new Error('Invalid username or password.');
      }
      this.router.navigate(['/home'], { state: { loginSuccess: true } });

      if (LoginResponse.isSuccess) {
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful',
          life: 3000,
        });

        await this.authService.getUserProfile();
      }
    } catch (err) {
      this.messageService.add({
        severity: 'error',
        summary: 'Login Failed',
        detail: err instanceof Error ? err.message : String(err),
        life: 3000,
      });
    } finally {
      this.loginLoading.set(false);
    }
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}

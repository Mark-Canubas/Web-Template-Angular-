import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FormValidators } from '../../lib/prime-preset/validators/form-validators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ButtonModule, FloatLabelModule, InputTextModule, PasswordModule, CheckboxModule, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login implements OnInit {
  loginForm!: FormGroup;

  fb = inject(FormBuilder)
  router = inject(Router);

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', FormValidators.username()],
      password: ['', FormValidators.password()],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.navigateTo('home');
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  navigateTo(path:string){
    this.router.navigate([path]);
  }
}

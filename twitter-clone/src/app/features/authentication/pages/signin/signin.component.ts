import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  step = 1;

  form: FormGroup;

  showSpinner = false;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  nextStep() {
    this.step++;
  }

  login() {
    this.showSpinner = true;
    const { email, password } = this.form.value;
    this.authService
      .SignIn(email, password)
      .then(() => {
        this.showSpinner = false;
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.log(err);
        this.showSpinner = false;
      });
  }
}

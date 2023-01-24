import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [AuthenticationComponent, SignupComponent, SigninComponent],
  imports: [CommonModule, RouterModule],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}

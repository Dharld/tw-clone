import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AuthenticationComponent, SignupComponent, SigninComponent],
  imports: [CommonModule, RouterModule, FormsModule, SharedModule],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}

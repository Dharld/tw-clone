import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticationComponent } from './features/authentication/authentication.component';
import { SignupFormComponent } from './features/authentication/components/signup-form/signup-form.component';
import { SendVerificationEmailComponent } from './features/authentication/pages/send-verification-email/send-verification-email.component';
import { SigninComponent } from './features/authentication/pages/signin/signin.component';
import { SignupComponent } from './features/authentication/pages/signup/signup.component';
import { HomeComponent } from './features/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sendVerificationEmail',
    component: SendVerificationEmailComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'flow',
    component: AuthenticationComponent,
    children: [
      {
        path: 'signup',
        component: SignupComponent,
        children: [
          {
            path: 'createAccount',
            component: SignupFormComponent,
          },
        ],
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

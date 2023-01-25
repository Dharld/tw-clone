import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { SharedModule } from './shared/shared.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    AuthenticationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

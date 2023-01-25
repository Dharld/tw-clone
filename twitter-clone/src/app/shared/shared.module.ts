import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputBoxComponent } from './components/input-box/input-box.component';

@NgModule({
  declarations: [ButtonComponent, InputBoxComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, InputBoxComponent],
})
export class SharedModule {}

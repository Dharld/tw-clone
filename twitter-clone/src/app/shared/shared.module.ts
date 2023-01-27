import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './components/button/button.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';

@NgModule({
  declarations: [ButtonComponent, InputBoxComponent, SelectBoxComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ButtonComponent, InputBoxComponent, SelectBoxComponent],
})
export class SharedModule {}

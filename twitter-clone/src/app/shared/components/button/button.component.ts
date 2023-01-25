import { Component, OnInit, Input } from '@angular/core';

type ButtonType = 'google' | 'apple' | 'simple' | 'outline';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() type: ButtonType = 'simple';

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent implements OnInit {
  @Input() name = '';
  selectedValue = '';
  @Input() values: Array<string> = [];
  @ViewChild('dropdown') dp!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  selectValue(value: string) {
    this.selectedValue = value;
    this.closeDropDown();
  }

  toggleDropDown() {
    this.dp.nativeElement.classList.toggle('active');
  }

  closeDropDown() {
    this.dp.nativeElement.classList.remove('active');
  }
}

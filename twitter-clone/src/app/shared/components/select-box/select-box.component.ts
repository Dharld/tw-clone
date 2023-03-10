import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

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
  @ViewChild('selectBox') sbox!: ElementRef;
  @Output() valueSelected: EventEmitter<string> = new EventEmitter();

  constructor() {
    window.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.select-box') == null) this.closeDropDown();
    });
  }

  ngOnInit(): void {}

  selectValue(value: string) {
    this.selectedValue = value;
    this.valueSelected.emit(this.selectedValue);
    this.closeDropDown();
  }

  toggleDropDown() {
    this.dp.nativeElement.classList.toggle('active');
    this.sbox.nativeElement.classList.toggle('active');
  }

  closeDropDown() {
    this.dp.nativeElement.classList.remove('active');
    this.sbox.nativeElement.classList.remove('active');
  }
}

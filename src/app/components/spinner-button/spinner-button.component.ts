import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() value: string = 'Продолжить';
  @Input() loading: boolean = true;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  submitClick(): void {
    this.onClick.emit();
  }
}

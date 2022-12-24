import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-all-products-main',
  templateUrl: './all-products-main.component.html',
  styleUrls: ['./all-products-main.component.scss']
})
export class AllProductsMainComponent{
  @Input() books: any;
  @Input() title: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
}

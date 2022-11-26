import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card-in-main',
  templateUrl: './product-card-in-main.component.html',
  styleUrls: ['./product-card-in-main.component.scss']
})
export class ProductCardInMainComponent implements OnInit {
  @Input() book: any;
  constructor() { }

  ngOnInit(): void {
  }

}

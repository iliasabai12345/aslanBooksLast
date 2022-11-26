import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-products-main',
  templateUrl: './all-products-main.component.html',
  styleUrls: ['./all-products-main.component.scss']
})
export class AllProductsMainComponent implements OnInit {
  @Input() books: any;

  constructor() { }

  ngOnInit(): void {
  }

}

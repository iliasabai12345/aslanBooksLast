import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  get catalog() {
    return [
      {src: 'assets/images/brain.jpg'},
      {src: 'assets/images/antidepresant.jpg'},
      {src: 'assets/images/logic.jpg'},
      {src: 'assets/images/menshe-200.jpg'},
      {src: 'assets/images/parents.jpg'}
    ]
  }

}

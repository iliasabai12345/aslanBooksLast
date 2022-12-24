import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  get catalog() {
    return [
      {src: 'assets/images/antidepresant.jpg', route: '200_pages'},
      {src: 'assets/images/brain.jpg', route: 'antidepressant_books'},
      {src: 'assets/images/logic.jpg', route: 'think_about_life'},
      {src: 'assets/images/menshe-200.jpg', route: 'to_parents'},
      {src: 'assets/images/parents.jpg', route: 'understand_yourself'}
    ]
  }

  toCatalog(route: string) {
    this.router.navigate(['/catalog-group/' + route]).then();
  }
}

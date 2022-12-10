import {Component, OnInit} from '@angular/core';
import {doc, Firestore, onSnapshot} from "@angular/fire/firestore";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private firestore: Firestore,
              private activatedRoute: ActivatedRoute) {
  }

  book: any;
  newPrice: number = 0;

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    const unsub = onSnapshot(doc(this.firestore, "books", id.toString()), (doc) => {
      this.book = doc.data();
      if (doc.data()?.['old_price']) {
        const numberPattern = /\d+/g;
        const oldPrice = doc.data()?.['old_price'].match(numberPattern);
        const price = doc.data()?.['price'].match(numberPattern);
        this.book.economy = Number(oldPrice.join('')) - Number(price.join(''));
      }
      console.log(this.book)
    });
  }

}

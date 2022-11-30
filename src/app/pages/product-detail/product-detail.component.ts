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

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    const unsub = onSnapshot(doc(this.firestore, "books", id.toString()), (doc) => {
      this.book = doc.data();
      console.log(this.book)
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {collection, collectionData, Firestore, query, where} from "@angular/fire/firestore";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-catalog-group',
  templateUrl: './catalog-group.component.html',
  styleUrls: ['./catalog-group.component.scss']
})
export class CatalogGroupComponent implements OnInit {
  subjectBooks?: Observable<any[]>;
  books: any = [];

  constructor(private firestore: Firestore,
              private activatedRoute: ActivatedRoute) {
  }

  catalog = this.activatedRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.getBooks();
    this.subjectBooks?.subscribe(res => {
      this.books = res;
    })
  }

  private getBooks() {
      this.subjectBooks = collectionData(
        query(
          collection(this.firestore, `/books`),
          where("catalog", "==", this.catalog)
        ), {idField: 'id'}
      ) as Observable<any[]>;
    }
}

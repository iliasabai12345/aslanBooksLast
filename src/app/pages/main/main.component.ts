import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {collection, collectionData, Firestore, query} from "@angular/fire/firestore";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  books?: Observable<any[]>;

  constructor(private firestore: Firestore) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.books = collectionData(
      query(
        collection(this.firestore, `/books`),
      ), {idField: 'id'}
    ) as Observable<any[]>;
  }
}

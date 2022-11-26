import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {collection, collectionData, Firestore, query} from "@angular/fire/firestore";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  subjectBooks?: Observable<any[]>;
  books: any;

  constructor(private firestore: Firestore) {
  }

  ngOnInit(): void {
    this.getBooks();
    this.subjectBooks?.subscribe(res => {
      this.books = res;
      console.log(res)
    })
  }

  private getBooks() {
    this.subjectBooks = collectionData(
      query(
        collection(this.firestore, `/books`),
      ), {idField: 'id'}
    ) as Observable<any[]>;
  }
}

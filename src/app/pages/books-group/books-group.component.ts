import {Component, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, query, where} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {LanguageService} from "../../shared/services/language.service";

@Component({
  selector: 'app-books-group',
  templateUrl: './books-group.component.html',
  styleUrls: ['./books-group.component.scss']
})
export class BooksGroupComponent implements OnInit {
  subjectBooks?: Observable<any[]>;
  books: any = [];

  constructor(private firestore: Firestore,
              private languageService: LanguageService,
              private activatedRoute: ActivatedRoute) {
  }

  chapter = this.activatedRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.getBooks();
    this.subjectBooks?.subscribe(res => {
      this.books = res;
      console.log(res);
    })
  }

  private getBooks() {
    if (this.chapter === 'all-books') {
      this.subjectBooks = collectionData(
        query(
          collection(this.firestore, `/books`),
        ), {idField: 'id'}
      ) as Observable<any[]>;
    } else {
      this.subjectBooks = collectionData(
        query(
          collection(this.firestore, `/books`),
          where("chapter", "==", this.chapter)
        ), {idField: 'id'}
      ) as Observable<any[]>;
    }
  }

  get language() {
    return this.languageService.getLanguage();
  }
}

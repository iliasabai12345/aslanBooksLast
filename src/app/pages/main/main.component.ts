import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {collection, collectionData, Firestore, query} from "@angular/fire/firestore";
import {ListenerService} from "../../shared/services/listener.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  subjectBooks?: Observable<any[]>;
  books: any;

  constructor(private firestore: Firestore,
              private listenerService: ListenerService) {
  }

  ngOnInit(): void {
    this.getBooks();
    this.subjectBooks?.subscribe(res => {
      this.books = res;
      this.listenerService.books$.next(res);
    })
  }

  private getBooks() {
    this.subjectBooks = collectionData(
      query(
        collection(this.firestore, `/books`),
      ), {idField: 'id'}
    ) as Observable<any[]>;
  }

  get newest() {
    return this.books?.filter((book: any) => book?.chapter == 'newest')
  }

  get popular_psychology() {
    return this.books?.filter((book: any) => book?.chapter == 'popular_psychology')
  }

  get recipe() {
    return this.books?.filter((book: any) => book?.chapter == 'recipe')
  }

  get investments() {
    return this.books?.filter((book: any) => book?.chapter == 'investments')
  }

  get prose_chosen() {
    return this.books?.filter((book: any) => book?.chapter == 'prose_chosen')
  }
}

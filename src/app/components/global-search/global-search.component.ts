import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {delay, Observable, Subject, takeUntil} from "rxjs";
import {ListenerService} from "../../shared/services/listener.service";
import {collection, collectionData, Firestore, query} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {hideSPB} from "../../shared/functions/search-progressbar";

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {
  @Input() search$: Subject<string> = new Subject<string>();
  destroy$: Subject<undefined> = new Subject<undefined>();
  booksRef = collection(this.firestore, "books");
  searchedRes?: Observable<any[]>;
  books: any;
  filteredBooks: any;
  @Output() closeSearchModal: EventEmitter<any> = new EventEmitter<any>();

  constructor(private listenerService: ListenerService,
              private router: Router,
              private firestore: Firestore) {
  }

  ngOnInit(): void {
    console.log(this.booksInLocalstorage);
    this.booksInLocalstorage.length ? this.books = this.booksInLocalstorage : this.search();
    this.search$
      .pipe(
        takeUntil(this.destroy$),
        delay(1500)
      )
      .subscribe((value: string) => {
        this.filterBooks(value);
        hideSPB();
      })
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }

  private search() {
    this.searchedRes = collectionData(
      query(
        collection(this.firestore, `/books`),
      ), {idField: 'id'}
    ) as Observable<any[]>;
  }

  get booksInLocalstorage() {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('books'));
  }

  filterBooks(val: string) {
    this.filteredBooks = this.books.filter((res: any) => {
      return res.title.toLowerCase().includes(val) || res.sku.toString().includes(val);
    });
  }

  navigate(sku: any) {
    this.router.navigate(['/' + 'product-detail' + '/' + sku]).then();
  }
}

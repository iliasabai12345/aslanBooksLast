import {Component, OnInit} from '@angular/core';
import {doc, Firestore, onSnapshot} from "@angular/fire/firestore";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {AddBookModalComponent} from "../../modals/add-book-modal/add-book-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {ListenerService} from "../../shared/services/listener.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private firestore: Firestore,
              private readonly userService: UserService,
              private readonly dialog: MatDialog,
              private readonly listenerService: ListenerService,
              private activatedRoute: ActivatedRoute) {
  }

  get userIsAdmin() {
    return this.userService.getUser()?.isAdmin;
  }

  book: any;
  newPrice: number = 0;
  language: boolean = true;
  readonly destroy$: Subject<undefined> = new Subject<undefined>()

  async ngOnInit() {
    this.listenLanguageChange();
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

  listenLanguageChange() {
    this.listenerService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.language = res;
      })
  }

  openAddModal() {
    console.log(this.book.sku)
    this.dialog.open(AddBookModalComponent, {
      width: '600px',
      height: '80vh',
      data: {book: this.book},
    });
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}

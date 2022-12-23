import {Component, OnInit} from '@angular/core';
import {doc, Firestore, onSnapshot} from "@angular/fire/firestore";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {AddBookModalComponent} from "../../modals/add-book-modal/add-book-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {ListenerService} from "../../shared/services/listener.service";
import {Subject} from "rxjs";
import {LanguageService} from "../../shared/services/language.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private firestore: Firestore,
              private readonly userService: UserService,
              private readonly dialog: MatDialog,
              private readonly languageService: LanguageService,
              private readonly listenerService: ListenerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  get userIsAdmin() {
    return this.userService.getUser()?.isAdmin;
  }

  book: any;
  newPrice: number = 0;
  readonly destroy$: Subject<undefined> = new Subject<undefined>()

  async ngOnInit() {
    this.listenRouter();
    this.getBook();
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

  get language() {
    return this.languageService.getLanguage();
  }

  getBook() {
    const id = this.activatedRoute.snapshot.params['id'];
    onSnapshot(doc(this.firestore, "books", id.toString()), (doc) => {
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

  listenRouter() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.getBook();
      }
    })
  }
}

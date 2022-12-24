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

  hardcodeTexts = [
    {
      comment_text: 'Помогите другим пользователям с выбором — будьте первым, кто поделится своим мнением об этом товаре. Отзывы могут оставлять только зарегистрированные пользователи интернет-магазина flip.kz. Чтобы оставить отзыв, войдите или зарегистрируйтесь',
      comment_text_kz: 'Басқа пайдаланушыларға таңдау жасауға көмектесіңіз-бұл зат туралы өз пікіріңізді бірінші болып бөлісіңіз. Пікірлерді тек тіркелген Интернет-дүкен пайдаланушылары қалдыра алады flip.kz. Пікір қалдыру үшін жүйеге кіріңіз немесе тіркеліңіз'
    },
    {
      orange_text:'Никакого риска! Оплатить данный товар Вы можете при получении. У нас есть бесплатная доставка по Казахстану. Если возникли вопросы, пожалуйста, свяжитесь с нами удобным способом',
      orange_text_kz:'Тәуекел жоқ! Сіз бұл өнімді алған кезде төлей аласыз. Бізде Қазақстан бойынша тегін жеткізу бар. Егер сұрақтар туындаса, бізге ыңғайлы түрде хабарласыңыз'
    }
  ]
}

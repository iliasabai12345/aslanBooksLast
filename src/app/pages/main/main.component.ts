import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {collection, collectionData, Firestore, query} from "@angular/fire/firestore";
import {ListenerService} from "../../shared/services/listener.service";
import {Router} from "@angular/router";
import {LanguageService} from "../../shared/services/language.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  subjectBooks?: Observable<any[]>;
  books: any;

  constructor(private firestore: Firestore,
              private router: Router,
              private languageService: LanguageService,
              private listenerService: ListenerService) {
  }

  ngOnInit(): void {
    this.getBooks();
    this.subjectBooks?.subscribe(res => {
      this.books = res;
      this.listenerService.books$.next(res);
      localStorage.setItem('books', JSON.stringify(res));
      this.fillCategories();
      console.log(this.categories);
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

  toChapter(chapter?: string) {
    if (chapter) {
      this.router.navigate(['/compilation' + '/' + chapter]).then();
    } else {
      this.router.navigate(['/compilation' + '/' + 'all-books']).then();
    }
  }

  get language() {
    return this.languageService.getLanguage();
  }

  categories: any[] = []
  checkCategories: any[] = [];

  fillCategories() {
    this.books.forEach((book: any) => {
      if (!this.checkCategories.includes(book.category)) {
        const category = {
          category: book.category,
          category_name_kz: book.category_name_kz,
          category_name_ru: book.category_name_ru,
          qty: 1
        };
        this.checkCategories.push(book.category);
        this.categories.push(category);
      } else {
        const findBook = this.categories.find(findBook => findBook.category === book.category);
        findBook.qty = ++findBook.qty;
      }
    })
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {doc, Firestore, setDoc} from "@angular/fire/firestore";
import {Subject, takeUntil} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ListenerService} from "../../shared/services/listener.service";
import {Loader} from "../../shared/clases/loader";
import {SnackbarService} from "../../shared/services/snackbar.service";

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss']
})
export class AddBookModalComponent implements OnInit, OnDestroy {
  books: any[] = [];
  readonly destroy$: Subject<undefined> = new Subject<undefined>();
  loader = new Loader();
  checkInFire: boolean = false;

  constructor(private firestore: Firestore,
              private listenerService: ListenerService,
              public snackbarService: SnackbarService,
              public afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.listenerService.books$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        console.log(res);
        this.books = res;
      })
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }

  form: FormGroup = new FormGroup<any>({
    width: new FormControl(null, [Validators.required]),
    height: new FormControl(null, [Validators.required]),
    ISBN: new FormControl(null, [Validators.required]),
    language: new FormControl('Русский'),
    page_count: new FormControl(null, [Validators.required]),
    date: new FormControl(null),
    thickness: new FormControl(null),
    title: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    old_price: new FormControl(null),
    sku: new FormControl(null, [Validators.required]),
    count: new FormControl(null, [Validators.required]),
    author: new FormControl(null, [Validators.required]),
    series: new FormControl(null),
    img_url: new FormControl(null),
    img_author_url: new FormControl(null),
    present_house: new FormControl(null),
    present_house_description: new FormControl(null),
    present_house_description_kz: new FormControl(null),
    author_info_ru: new FormControl(null),
    author_info_kz: new FormControl(null),
    description_ru: new FormControl(null, [Validators.required]),
    description_kz: new FormControl(null, [Validators.required]),
    catalog: new FormControl(null),
    catalog_name_ru: new FormControl(null),
    catalog_name_kz: new FormControl(null),
    chapter: new FormControl(null),
    chapter_name_ru: new FormControl(null),
    chapter_name_kz: new FormControl(null),
    category: new FormControl(null, [Validators.required]),
    category_name_ru: new FormControl(null, [Validators.required]),
    category_name_kz: new FormControl(null, [Validators.required]),
    addedTime: new FormControl(Date.now()),
    addedDate: new FormControl(new Date())
  })


  // categories

  category = [
    {value: 'artistic_literature', name_ru: 'Художественная литература', name_kz: 'Көркем әдебиет'},
    {value: 'children_literature', name_ru: 'Детская литература', name_kz: 'Балалар әдебиеті'},
    {value: 'education_textbooks', name_ru: 'Образование. Учебники', name_kz: 'Білім. Оқулықтар'},
    {value: 'popular_psychology', name_ru: 'Популярная психология', name_kz: 'Танымал психология'},
    {value: 'business_literature', name_ru: 'Деловая литература', name_kz: 'Іскерлік әдебиет'},
    {value: 'home_family_leisure', name_ru: 'Дом. Семья. Досуг', name_kz: 'Үй. Отбасы. Бос уақыт'},
    {
      value: 'esotericism_magic_astrology',
      name_ru: 'Эзотерика. Магия. Астрология',
      name_kz: 'Эзотерика. Сиқыр. Астрология'
    },
    {value: 'medicine_and_health', name_ru: 'Медицина и здоровье', name_kz: 'Медицина және денсаулық'},
    {value: 'science', name_ru: 'Наука', name_kz: 'Ғылым'},
    {value: 'journalism', name_ru: 'Публицистика', name_kz: 'Журналистика'},
    {value: 'gift_editions', name_ru: 'Подарочные издания', name_kz: 'Сыйлық басылымдары'},
    {value: 'gift_editions', name_ru: 'Компьютеры и Интернет', name_kz: 'Компьютерлер және Интернет'},
    {value: 'literature_of_Kazakhstan', name_ru: 'Литература Казахстана', name_kz: 'Қазақстан Әдебиеті'},
    {value: 'legal_literature', name_ru: 'Юридическая литература', name_kz: 'Құқықтық әдебиет'},
    {value: 'technical_literature', name_ru: 'Техническая литература', name_kz: 'Техникалық әдебиеттер'},
    {value: 'art_culture', name_ru: 'Искусство. Культура', name_kz: 'Өнер. Мәдениет'},
    {value: 'sport_tourism_hobby', name_ru: 'Спорт. Туризм. Хобби', name_kz: 'Спорт. Туризм. Хобби'},
    {
      value: 'encyclopedias_references',
      name_ru: 'Энциклопедии. Справочники',
      name_kz: 'Энциклопедиялар. Анықтамалықтар'
    },
    {value: 'cars', name_ru: 'Автомобили', name_kz: 'Автомобильдер'},
    {
      value: 'secrets_sensations_catastrophes',
      name_ru: 'Тайны, сенсации, катастрофы',
      name_kz: 'Жұмбақтар, сенсациялар, апаттар'
    },
    {
      value: 'accessories_calendars_postcards',
      name_ru: 'Аксессуары, календари, открытки',
      name_kz: 'Аксессуарлар, күнтізбелер,ашық хаттар'
    }
  ]

  // Каталог

  catalog = [
    {value: null, name_ru: 'Нет', name_kz: null},
    {value: '200_pages', name_ru: 'Меньше 200 страниц', name_kz: '200 беттен аз'},
    {value: 'antidepressant_books', name_ru: 'Книги антидепресанты', name_kz: 'Антидепрессанттар кітаптары'},
    {
      value: 'think_about_life',
      name_ru: 'Если хочешь поразмыщлять о жизни',
      name_kz: 'Егер сіз өмір туралы ашуланғыңыз келсе'
    },
    {value: 'to_parents', name_ru: 'Незаменимые книги для родителей', name_kz: 'Ата-аналар үшін таптырмас кітаптар'},
    {
      value: 'understand_yourself',
      name_ru: 'Понять себя и всех вокруг',
      name_kz: 'Өзіңізді және айналаңыздағылардың бәрін түсініңіз'
    }
  ]

  // Разделы

  chapters = [
    {value: null, name_ru: 'Нет', name_kz: null},
    {value: 'newest', name_ru: 'Книжные новинки', name_kz: 'Кітап жаңалықтары'},
    {value: 'popular_psychology', name_ru: 'Популярная психология', name_kz: 'Танымал психология'},
    {value: 'recipe', name_ru: 'Ни один рецепт не будет потерян!', name_kz: 'Ешқандай рецепт жоғалмайды!'},
    {value: 'investments', name_ru: 'Все об инвестициях', name_kz: 'Барлығы инвестиция туралы'},
    {value: 'prose_chosen', name_ru: 'Проза, которую выбирают', name_kz: 'Таңдалған Проза'}
  ]


  chapterChange() {
    const selectedChapter = this.form.controls['chapter'].getRawValue();
    const find = this.chapters.find((res: any) => res.value === selectedChapter);
    this.form.controls['chapter_name_ru'].patchValue(find?.name_ru);
    this.form.controls['chapter_name_kz'].patchValue(find?.name_kz);
  }

  catalogChange() {
    const selected = this.form.controls['catalog'].getRawValue();
    const find = this.catalog.find((res: any) => res.value === selected);
    this.form.controls['catalog_name_ru'].patchValue(find?.name_ru);
    this.form.controls['catalog_name_kz'].patchValue(find?.name_kz);
  }

  categoryChange() {
    const selected = this.form.controls['category'].getRawValue();
    const find = this.category.find((res: any) => res.value === selected);
    this.form.controls['category_name_ru'].patchValue(find?.name_ru);
    this.form.controls['category_name_kz'].patchValue(find?.name_kz);
  }

  cancel() {
  }

  reset() {
    this.form.reset();
  }

  async send() {
    this.loader.on();
    await setDoc(doc(this.firestore, "books", this.form.controls['sku'].getRawValue()), this.form.value, {merge: true})
      .then(() => this.loader.off())
      .then(() => {
        return this.snackbarService.openSnackbar(`Книга ${this.form.get('title')?.value} успешно добавлено!!!`)
      })
      .then(() => this.form.reset())
      .catch(() => this.snackbarService.openSnackbar('Ошибка при добавлений книги'))
  }

  checkBook() {
    const sku = this.form.controls['sku'].getRawValue();
    this.checkInFire = !!this.books.find(book => book.sku === sku.trim())
  }
}

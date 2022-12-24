import {Component, OnInit} from '@angular/core';
import {CityChangeComponent} from "../../modals/city-change/city-change.component";
import {MatDialog} from "@angular/material/dialog";
import {SignUpComponent} from "../../modals/sign-up/sign-up.component";
import {UserService} from "../../shared/services/user.service";
import {SignInComponent} from "../../modals/sign-in/sign-in.component";
import {AuthService} from "../../shared/services/auth.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {getStorage, ref, uploadBytes} from "@angular/fire/storage";
import {AddBookModalComponent} from "../../modals/add-book-modal/add-book-modal.component";
import {ListenerService} from "../../shared/services/listener.service";
import {Subject, takeUntil} from "rxjs";
import {LanguageService} from "../../shared/services/language.service";
import {Router} from "@angular/router";
import {showSPB} from "../../shared/functions/search-progressbar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  city: string = 'Алматы';
  file?: File | any;
  destroy$: Subject<undefined> = new Subject<undefined>();
  showGlobalSearch: boolean = false;

  constructor(public dialog: MatDialog,
              private storage: AngularFireStorage,
              public listenerService: ListenerService,
              private authService: AuthService,
              private languageService: LanguageService,
              private readonly router: Router,
              private userService: UserService) {
  }

  lang: string = 'русский';
  search$: Subject<any> = new Subject<any>();

  ngOnInit() {
    this.listenerService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        localStorage.setItem('lang', res);
      })
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }

  get language() {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('lang'));
  }

  get userName() {
    return this.userService.getUser()?.displayName;
  }

  get userIsAdmin() {
    return this.userService.getUser()?.isAdmin;
  }

  openCityChangeModal(): void {
    const dialogRef = this.dialog.open(CityChangeComponent, {
      width: '400px',
      height: '700px',
      data: {selectedCity: this.city},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.length)
        this.city = result;
    });
  }

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '400px',
      height: '350px',
      data: {selectedCity: this.city},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.length)
        this.city = result;
    });
  }

  signIn() {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '400px',
      height: '250px',
      data: {selectedCity: this.city},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.length)
        this.city = result;
    });
  }

  logout(): void {
    this.authService.SignOut().then();
  }

  uploadFile(file: File) {
    console.log(file.name)
    const storage = getStorage()
    const storageRef = ref(storage, 'some-child');
    uploadBytes(storageRef, this.file).then(() => {
      console.log('Uploaded a blob or file!');
    });
  }

  openAddModal() {
    this.dialog.open(AddBookModalComponent, {
      width: '600px',
      height: '80vh',
      data: {selectedCity: this.city},
    });
  }

  setLanguage(b: boolean) {
    this.languageService.setLanguage(b);
  }

  toContactsPage() {
    this.router.navigate(['/contacts']).then();
  }

  globalSearch(value: any) {
    if (value.length) {
      showSPB();
      this.showGlobalSearch = true;
      this.search$.next(value);
    } else {
      this.showGlobalSearch = false;
    }
  }
}

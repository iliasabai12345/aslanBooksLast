import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {LanguageService} from "../../shared/services/language.service";
import {MatDialog} from "@angular/material/dialog";
import {IsRegisteredComponent} from "../../modals/is-registered/is-registered.component";

@Component({
  selector: 'app-to-cart',
  templateUrl: './to-cart.component.html',
  styleUrls: ['./to-cart.component.scss']
})
export class ToCartComponent implements OnInit {
  @Input() book: any;

  get userName() {
    return this.userService.getUser()?.displayName;
  }

  constructor(private readonly userService: UserService,
              private dialog: MatDialog,
              private readonly languageService: LanguageService) {
  }

  ngOnInit(): void {
  }

  register(): void {
    this.dialog.open(IsRegisteredComponent, {
      width: '320px',
      height: '200px',
    });
  }

  get language() {
    return this.languageService.getLanguage();
  }

  toCart() {

    if (!this.userName) {

    } else {
      this.register();
    }
  }
}

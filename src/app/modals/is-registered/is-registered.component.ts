import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../shared/services/language.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ToCartComponent} from "../../components/to-cart/to-cart.component";
import {SignInComponent} from "../sign-in/sign-in.component";
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-is-registered',
  templateUrl: './is-registered.component.html',
  styleUrls: ['./is-registered.component.scss']
})
export class IsRegisteredComponent implements OnInit {

  constructor(private readonly languageService: LanguageService,
              private readonly dialog: MatDialog,
              public dialogRef: MatDialogRef<ToCartComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  get language() {
    return this.languageService.getLanguage();
  }

  close() {
    this.dialogRef.close();
    this.signIn();
  }

  register() {
    this.dialogRef.close();
    this.dialog.open(SignUpComponent, {
      width: '400px',
      height: '350px',
    });
  }

  signIn() {
    this.dialogRef.close();
    this.dialog.open(SignInComponent, {
      width: '400px',
      height: '250px',
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../shared/services/language.service";
import {MatDialogRef} from "@angular/material/dialog";
import {ToCartComponent} from "../../components/to-cart/to-cart.component";

@Component({
  selector: 'app-is-registered',
  templateUrl: './is-registered.component.html',
  styleUrls: ['./is-registered.component.scss']
})
export class IsRegisteredComponent implements OnInit {

  constructor(private readonly languageService: LanguageService,
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
  }

  register() {

  }
}

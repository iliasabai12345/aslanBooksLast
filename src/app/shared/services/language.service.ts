import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() {
  }

  language: boolean = true;

  setLanguage(value: boolean) {
    this.language = value;
  }

  getLanguage() {
    return this.language;
  }
}

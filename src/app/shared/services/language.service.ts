import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() {
  }

  language: boolean = true;
  lngCode: string = 'ru';

  setLanguage(value: boolean, code?: any) {
    this.language = value;
    this.lngCode = code;
  }

  getLanguage() {
    return this.language;
  }
}

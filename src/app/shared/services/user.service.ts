import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user')!);
  }
}

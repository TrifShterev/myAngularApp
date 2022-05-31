import { Injectable } from '@angular/core';
import{LocalStorageService} from './local-storage.service'

@Injectable()
export class UserService {

  isLogged = false;

  constructor(private storage: LocalStorageService) {
    this.isLogged = this.storage.getItem('isLogged');
   }

  login(): void{
    this.isLogged = true;
    this.storage.setItem('isLogged', true)
  }

  logout(): void{
    this.isLogged = false;
    this.storage.setItem('isLogged', false)
  }
}

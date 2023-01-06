import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkEnabled: boolean = false;

  constructor() { }

  changeTheme() {
    this.isDarkEnabled === false ? this.isDarkEnabled = true : this.isDarkEnabled = false;
  }
}

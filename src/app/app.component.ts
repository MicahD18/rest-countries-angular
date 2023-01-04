import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  title = 'rest-countries';

  filteredCountries: any;

  addFilteredCountries(newItem: any) {
    this.filteredCountries = newItem;
    console.log(this.filteredCountries);
    
  }
}

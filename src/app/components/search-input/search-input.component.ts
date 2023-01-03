import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  showOptions: boolean = false;

  regionValue: string = 'Filter by Region';

  options: any[] = [
    { id: 1, region: 'Africa' },
    { id: 2, region: 'America' },
    { id: 3, region: 'Asia' },
    { id: 4, region: 'Europe' },
    { id: 5, region: 'Oceania' },
  ];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  toggleShowOptions() {
    this.showOptions === false
      ? (this.showOptions = true)
      : (this.showOptions = false);
  }

  getFiltered(id: number, region: string) {
    this.options.map(item => {
      if (item.id === id) {
        this.regionValue = item.region;
        this.showOptions = false;

        this.countryService.getCountriesByRegion(region);
      }
    })
  }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Input() countries: any;
  @Input() region: any;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.getAllCountries();

    if (this.region !== 'Filter by Region') {
      this.countries = this.countryService.getCountriesByRegion(this.region);
    }
  }

  getJSON() {
    this.countries.subscribe((data: any) => console.log(data));
  }

  showInfo(index: number) {
    console.log(index);

    this.countryService.getCountryInfo(index, this.countries);
    
  }
}

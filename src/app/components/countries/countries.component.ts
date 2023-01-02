import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries = this.countryService.getAllCountries();

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries();
  }

}

import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Input() countries: any;
  @Input() filteredCountries: any;
  @Input() region: any;
  @Input() text: any;

  constructor(private countryService: CountryService, public themeService: ThemeService) { }

  ngOnInit(): void {
    this.countries = this.countryService.getAllCountries();
    
    this.countries.subscribe((data:any) => {
      console.log(data);
    })

    if (this.region !== 'Filter by Region') {
      this.countries.subscribe((data:any) => {
        console.log(data);
      })
    }
  }

  showInfo(name: string) {
    this.countryService.getCountryInfo(name, this.countries);
  }
}

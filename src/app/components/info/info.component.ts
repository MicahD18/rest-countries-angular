import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(public countryService: CountryService, public themeService: ThemeService) {
    
  }

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(public countryService: CountryService) {
    
  }

  ngOnInit(): void {
    
  }

  getData() {
    console.log(this.countryService.countryInfo);
    
  }

}

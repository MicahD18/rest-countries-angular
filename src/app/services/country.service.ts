import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAllCountries() {
    const req = this.http.get('https://restcountries.com/v2/all');

    req.subscribe((data) => {
      console.log(data);
    });
  }

  getCountriesByRegion(region: string) {
    const req = this.http.get(`https://restcountries.com/v3.1/region/${region}`);

    req.subscribe((data) => {
      console.log(data);
    });
  }
}

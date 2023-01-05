import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  countryInfo: any;

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Object> {
    return this.http.get('https://restcountries.com/v2/all');
  }

  getCountriesByRegion(region: string): Observable<Object> {
    return this.http.get(`https://restcountries.com/v2/region/${region}`);
  }

  getCountryInfo(index: number, countries: any): Observable<Object> {
   return countries.subscribe((data: any) => {
      data.map((item:any, i:number) => {
        if (i === index) {
          console.log(item);

          this.countryInfo = item;

          console.log(this.countryInfo);
          
        }
      })
    })
  }
}

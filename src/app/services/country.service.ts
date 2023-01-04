import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Object> {
    return this.http.get('https://restcountries.com/v2/all');
  }

  getCountriesByRegion(region: string): Observable<Object> {
    return this.http.get(`https://restcountries.com/v2/region/${region}`);
  }
}

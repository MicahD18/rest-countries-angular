import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rest-countries';

  filteredCountries: any;

  infoClicked: boolean = false;

  event: any;

  ngOnInit(): void {

  }

  constructor(private location: Location, public themeService: ThemeService) {
    this.event = location.onUrlChange((val:any) => {
      this.event = val;
    })
  }

  ngOnDestroy() {
    this.event.unsubscribe();
  }
}

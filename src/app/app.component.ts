import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  title = 'rest-countries';

  filteredCountries: any;

  infoClicked: boolean = false;

  event: any;

  constructor(private location: Location) {
    this.event = location.onUrlChange((val:any) => {
      this.event = val;
    })
  }

  ngOnDestroy() {
    this.event.unsubscribe();
  }
}

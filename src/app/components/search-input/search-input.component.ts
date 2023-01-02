import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  showOptions: boolean = false;

  regionValue: string = 'Filter by Region';

  options: any[] = [
    { id: 1, region: 'Africa' },
    { id: 2, region: 'America' },
    { id: 3, region: 'Asia' },
    { id: 4, region: 'Europe' },
    { id: 5, region: 'Oceania' },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleShowOptions() {
    this.showOptions === false
      ? (this.showOptions = true)
      : (this.showOptions = false);
  }

  getFiltered(id: number) {
    this.options.map(item => {
      if (item.id === id) {
        this.regionValue = item.region;
        this.showOptions = false;
      }
    })
  }
}

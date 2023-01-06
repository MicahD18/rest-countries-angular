import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isDarkEnabled: boolean = false;

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  changeTheme() {
    this.themeService.changeTheme();

    // this.isDarkEnabled === false ? this.isDarkEnabled = true : this.isDarkEnabled = false;
  }

}

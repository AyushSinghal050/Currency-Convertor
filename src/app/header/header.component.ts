import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getDate();
  }
  getDate() {
    this.date = this.appService.date;
    console.log('Hi', this.date);
    return this.date;
  }
}

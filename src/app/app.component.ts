import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: Http, private appService: AppService) {}

  ngOnInit() {
    this.displayData();
  }

  displayData() {
    this.appService.getData()
    .subscribe(

      (response: Response) => {
        const data = response.json();
        this.appService.Data = data.quotes;
        this.appService.timestamp = data.timestamp;
        this.appService.date = new Date(data.timestamp + 1531151251393);  // incorrect date from API
        console.log(this.appService.Data);
      },
      (error) => console.log(error)
    );
  }
}

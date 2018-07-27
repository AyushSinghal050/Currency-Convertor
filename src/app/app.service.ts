import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  timestamp: number;
  Data = [];
  date: any;

  constructor(private http: Http) { }

  getData() {
    return this.http.get('http://www.apilayer.net/api/live?access_key=c61ac7b6ba993d2a02f45374bf373493');
  }
}

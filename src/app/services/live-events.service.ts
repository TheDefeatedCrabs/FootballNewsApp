import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Match } from './../models/Match';

@Injectable()
export class LiveEventsService {
  private baseUrl: string = 'https://api.crowdscores.com/v1/matches';
  constructor(private http: Http) { }
  
  getAll(): Observable<Match[]> {
    let today = new Date()
    return this.http.get(
      this.baseUrl, 
      {
        params: {
          api_key: '373f6fcc7c614ae7a269bf364d51618f',
          from: this.getStartOfDay(),
          to: this.getEndOfDay(),
        },
        headers: this.getHeaders(),
      })
      .map((res) => {
          return <Match[]> res.json();
      });
  }

  private getHeaders(): Headers{
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private getStartOfDay(): string{
    let date = new Date();
    return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}T00:00:00-00:00`;
  }

  private getEndOfDay(): string{
    let date = new Date();
    return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}T23:59:59-00:00`;
  }
}

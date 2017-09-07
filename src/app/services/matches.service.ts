import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Match } from './../models/Match';
import { Config }  from './../../environments/config/config';

@Injectable()
export class MatchesService {
  private baseUrl: string = 'https://api.crowdscores.com/v1/matches';
  private apiKey: string = Config.FootballApiConfig.API_KEY;
  
  constructor(private http: Http) { }

   getAllTodays(): Observable<Match[]> {
    let today = new Date()
    return this.http.get(
      this.baseUrl, 
      {
        params: {
          api_key: this.apiKey,
          from: this.getStartOfDay(),
          to: this.getEndOfDay(),
        }
      })
      .map((res) => {
          return <Match[]> res.json();
      });
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

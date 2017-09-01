import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Tip } from '../models/Tip';
import { News } from '../models/News';

@Injectable()
export class ClientService {
  tips: FirebaseListObservable<any[]>;
  tip: FirebaseObjectObservable<any>;
  news: FirebaseListObservable<any[]>;
  oneNews: FirebaseObjectObservable<any>;

  constructor(
    public af: AngularFireDatabase
  ) {
    this.tips = this.af.list('/tips') as FirebaseListObservable<Tip[]>;
    this.news = this.af.list('/news') as FirebaseListObservable<News[]>;
  }

  getTips() {
    return this.tips;
  }

  addTip(tip: Tip) {
    this.tips.push(tip);
  }

  getNews() {
    return this.news;
  }

  addNews(oneNews: News) {
    this.news.push(oneNews);
  }

  getOneNews(id: string) {
    this.oneNews = this.af.object('/news/' + id) as FirebaseObjectObservable<News>;
    return this.oneNews;
  }

  updateOneNews(id: string, oneNews: News) {
    return this.news.update(id, oneNews);
  }

  deleteOneNews(id: string) {
    return this.news.remove(id);
  }

}

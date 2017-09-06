import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Tip } from '../models/Tip';
import { News } from '../models/News';
import * as firebase from 'firebase/app';

@Injectable()
export class ClientService {
  tips: FirebaseListObservable<any[]>;
  tip: FirebaseObjectObservable<any>;
  news: FirebaseListObservable<any[]>;
  oneNews: FirebaseObjectObservable<any>;

  user: firebase.User;
  userName: string;

  constructor(
    public af: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.tips = this.af.list('/tips') as FirebaseListObservable<Tip[]>;
    this.news = this.af.list('/news') as FirebaseListObservable<News[]>;


    this.afAuth.authState.subscribe(auth => {
          if (auth !== undefined && auth !== null) {
            this.user = auth;
          }

        });
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
    this.getUser().subscribe(a => {
            this.userName = a.displayName;
          });
    oneNews.displayName = this.userName;
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


  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.af.object(path);
  }

  getUsers() {
    const path = '/users';
    return this.af.list(path);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Tip } from '../models/Tip';

@Injectable()
export class ClientService {
  tips: FirebaseListObservable<any[]>;
  tip: FirebaseObjectObservable<any>;

  constructor(
    public af: AngularFireDatabase
  ) {
    this.tips = this.af.list('/tips') as FirebaseListObservable<Tip[]>;
  }

  getTips() {
    return this.tips;
  }

  addTip(tip: Tip) {
    this.tips.push(tip);
  }

}

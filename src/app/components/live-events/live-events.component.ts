import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatchesService } from './../../services/matches.service';
import { Match } from './../../models/Match';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.css']
})
export class LiveEventsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  matches: Match[];
  showSpinner = true;

  constructor( private liveEventsService: MatchesService) { }

  ngOnInit() {
    this.liveEventsService
      .getAllTodays()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(m => this.matches = m);
      console.log(this.matches);
      this.showSpinner = false;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

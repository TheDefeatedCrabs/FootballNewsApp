import { Component, OnInit, OnDestroy } from '@angular/core';
import { LiveEventsService } from './../../services/live-events.service';
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

  constructor( private liveEventsService: LiveEventsService) { }

  ngOnInit() {
    this.liveEventsService
      .getAll()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(m => this.matches = m);
      this.showSpinner = false;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

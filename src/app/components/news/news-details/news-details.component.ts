import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { News } from '../../../models/News';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
 id: string;
  news: News = {
    header: '',
    subHeader: '',
    newsText: ''
  };
  constructor(
    public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getOneNews(this.id).subscribe(news => {
      this.news = news;
      console.log(this.news);
    });
  }

}

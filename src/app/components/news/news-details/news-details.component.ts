import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { News } from '../../../models/News';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
 isMine: boolean;
 id: string;
  news: News = {
    header: '',
    subHeader: '',
    newsText: '',
    newsPicture: ''
  };
  constructor(
    public authService: AuthService,
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

    this.authService.authUser().subscribe(auth => {
      if (auth.email === this.news.displayEmail ) {
        this.isMine = true;
      } else {
        this.isMine = false;
      }
    });
  }

  onDeleteClick() {
    if (confirm("Наистина ли искате да изтриете тази новина")) {
      this.clientService.deleteOneNews(this.id);
      this.flashMessagesService.show('Новината беше изтрита успешно', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/news/all']);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { News } from '../../../models/News';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  id: string;
  news: News = {
    header: '',
    subHeader: '',
    newsText: '',
    newsPicture: ''
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
    });
  }

  onSubmit({value, valid}: {value: News, valid: boolean}) {
    if (!valid) {
      this.flashMessagesService.show('Моля попълнете всички полета', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['edit-news/' + this.id]);
    } else {
      // Update client
      this.clientService.updateOneNews(this.id, value);
      this.flashMessagesService.show('Новината е променена успешно', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/news/' + this.id]);
    }
  }

}

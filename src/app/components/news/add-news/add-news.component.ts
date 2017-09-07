import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/News';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
news: News = {
    header: '',
    subHeader: '',
    newsText: '',
    newsPicture: ''
  };
  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public clientService: ClientService
  ) { }

  ngOnInit() {
  }

  onSubmit({ value, valid}: {value: News, valid: boolean }) {
    if (!valid) {
      this.flashMessagesService.show('Моля попълнете всички полета!', {cssClass:'alert-danger', timeout: 4000});
      this.router.navigate(['news/add']);
    } else {
      this.clientService.addNews(value);
      this.flashMessagesService.show('Успешно добавихте нова новина', {cssClass:'alert-success', timeout: 4000});
      this.router.navigate(['/news/all']);
    }
  }

}

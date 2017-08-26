import { Component, OnInit } from '@angular/core';
import { Tip } from '../../../models/Tip';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.css']
})
export class AddTipComponent implements OnInit {
  tip: Tip = {
    header: '',
  };
  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public clientService: ClientService
  ) { }

  ngOnInit() {
  }

  onSubmit({ value, valid}: {value: Tip, valid: boolean }) {
    if (!valid) {
      this.flashMessagesService.show('Моля попълнете всички полета!', {cssClass:'alert-danger', timeout: 4000});
      this.router.navigate(['tips/add']);
    } else {
      this.clientService.addTip(value);
      this.flashMessagesService.show('Успешно добавихте нова прогноза', {cssClass:'alert-success', timeout: 4000});
      this.router.navigate(['/tips/all']);
    }
  }

}

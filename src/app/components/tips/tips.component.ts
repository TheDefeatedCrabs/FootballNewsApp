import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Tip } from '../../models/Tip';
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  tips: Tip[];
  constructor( public clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getTips().subscribe(tips => {
      this.tips = tips;
      console.log(this.tips);
    });
  }

}

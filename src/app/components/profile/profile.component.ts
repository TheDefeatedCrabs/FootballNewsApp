import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    displayName: '',
    email: '',
    status: ''
  };
  constructor(public clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}

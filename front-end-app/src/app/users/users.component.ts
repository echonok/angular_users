import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private flashMessages: FlashMessagesService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  getAllUsersClick() {
    this.commonService.getAllUsers().subscribe(data => {
      console.log('data', data);
      console.log('data', data);
    });
  }
}

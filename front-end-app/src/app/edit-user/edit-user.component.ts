import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../check-form.service';
import { CommonService } from '../common.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  firstName: String;
  lastName: String;

  constructor(
    private checkForm: CheckFormService,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
  }

  userSaveClick() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    if (!this.checkForm.checkValue(user.firstName)) {
      this.flashMessages.show('firstName is empty', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      console.log(`firstName is empty`);
      return false;
    }
    if (!this.checkForm.checkValue(user.lastName)) {
      this.flashMessages.show('lastName is empty', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      console.log(`lastName is empty`);
      return false;
    }
    this.commonService.addUser(user).subscribe(data => {
      if (!data.success) {
        this.flashMessages.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
        return false;
      } else {
        this.flashMessages.show(data.msg, {
          cssClass: 'alert-success',
          timeout: 2000
        });
        return false;
      }
    });
  }
}

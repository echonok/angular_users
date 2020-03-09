import { Component, OnInit, Inject } from '@angular/core';
import { CheckFormService } from '../check-form.service';
import { CommonService } from '../common.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  _id: string;
  firstName: string;
  lastName: string;
  title: string;
  roles: string;
  status: string;
  name: string;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  _id: String;
  firstName: String;
  lastName: String;
  title: String;
  roles: String;
  status: String;
  name: String;
  userAdded: Boolean;

  constructor(
    private checkForm: CheckFormService,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private commonService: CommonService,
    public matDialog: MatDialog,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  userSaveClick() {

    this.userAdded = false;

    const user = {
      _id: this.data._id,
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      title: this.data.title,
      roles: this.data.roles,
      status: this.data.status
    };

    if (!this.checkForm.checkValue(user.firstName)) {
      this.flashMessages.show('firstName is empty', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    }
    if (!this.checkForm.checkValue(user.lastName)) {
      this.flashMessages.show('lastName is empty', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
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
        this.userAdded = true;
        console.log('закрываем');
        return false;
      }
    });
    console.log('this.userAdded', this.userAdded);
    this.dialogRef.close();
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { CheckFormService } from '../check-form.service';
import { CommonService } from '../common.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

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

  rolesControl = new FormControl();
  rolesList: string[] = ['Administrator', 'Sales Manager', 'Sales Representatibe', 'Account Manager', 'Product', 'Marketing'];
  selected: string[];

  constructor(
    private checkForm: CheckFormService,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private commonService: CommonService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    if (this.data.roles.length > 0) {
      this.rolesControl.setValue(this.data.roles.split(', '));
    }
  }

  filter(data) {
    this.data.roles = data.value.join(', ');
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

    if (this.data._id === undefined) {
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
          return false;
        }
      });
      this.dialogRef.close();
    } else {
      this.commonService.editUser(user).subscribe(data => {
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
          return false;
        }
      });
      this.dialogRef.close();
    }

  }
}

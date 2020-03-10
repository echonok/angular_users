import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { CommonService } from '../common.service';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    public matDialog: MatDialog,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  @Output()
  addUser = new EventEmitter<boolean>();

  addUserClick() {
    const dialogRef = this.matDialog.open(EditUserComponent, {
      data: {
        name: 'New user',
        status: 'Enabled',
        firstName: '',
        lastName: '',
        title: '',
        roles: ''
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.addUser.emit(true);
    });
  }

}

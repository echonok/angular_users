import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TableButtonsComponent } from '../table-buttons/table-buttons.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  frameworkComponents: any;

  constructor(
    private flashMessages: FlashMessagesService,
    private commonService: CommonService,
    public matDialog: MatDialog,
    public datepipe: DatePipe
  ) {
     this.frameworkComponents = {
       tableButtons: TableButtonsComponent
     };
  }

  ngOnInit(): void {
    this.getAllUsersClick();
  }

  columnDefs = [
    {headerName: 'ID', field: '_id', hide: true },
    {headerName: 'First Name', field: 'firstName' },
    {headerName: 'Last Name', field: 'lastName' },
    {headerName: 'Title', field: 'title' },
    {headerName: 'Roles', field: 'roles' },
    {headerName: 'Status', field: 'status' },
    {headerName: 'Add Date', field: 'addDate' },
    {headerName: 'Last Update Date', field: 'lastUpdateDate' },
    {headerName: 'Actions', field: 'actions', cellRenderer: 'tableButtons' }
  ];
  
  rowData: any;

  getAllUsersClick() {
    this.commonService.getAllUsers().subscribe(data => {
      if (!data.success) {
        for (let user of data.users) {
          const dateFromId = new Date(parseInt(user._id.substring(0, 8), 16) * 1000);
          user.addDate = this.datepipe.transform(dateFromId, 'dd-MMM-yyyy');
          user.lastUpdateDate = this.datepipe.transform(user.lastUpdateDate, 'dd-MMM-yyyy');
        }
        this.rowData = data.users;
      }
    });
  }

  addUserClick() {
    const dialogRef = this.matDialog.open(EditUserComponent, {
      data: {
        name: "New user"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllUsersClick();
    });

  }

  onChanged(deleted: any) {
    //console.log('deleted =>>>', deleted);
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

}

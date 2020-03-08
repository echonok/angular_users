import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TableButtonsComponent } from '../table-buttons/table-buttons.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    public dialog: MatDialog
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
        this.rowData = data.users;
      }
    });
  }

  addUserClick() {
    console.log('clicked');
    const dialogRef = this.dialog.open(EditUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

}

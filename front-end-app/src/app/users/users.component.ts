import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TableButtonsComponent } from '../table-buttons/table-buttons.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Observable, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  frameworkComponents: any;
  private eventsSubscription: Subscription;
  public context;

  constructor(
    private flashMessages: FlashMessagesService,
    private commonService: CommonService,
    public matDialog: MatDialog,
    public datepipe: DatePipe
  ) {
    this.context = { componentParent: this };
    this.frameworkComponents = {
       tableButtons: TableButtonsComponent
     };
  }

  @Input()
  events: Observable<void>;

  eventsSubject: Subject<void> = new Subject<void>();

  gridOptions = {
    defaultColDef: {
      resizable: true
    },
  };

  ngOnInit() {
    this.getAllUsers();
    this.eventsSubscription = this.events.subscribe(() => this.getAllUsers());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
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

  getAllUsers() {
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

  methodFromParent() {
    this.getAllUsers();
  }

}

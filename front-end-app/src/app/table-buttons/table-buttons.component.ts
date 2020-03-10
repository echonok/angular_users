import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { CommonService } from '../common.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-table-buttons',
  templateUrl: './table-buttons.component.html',
  styleUrls: ['./table-buttons.component.css']
})
export class TableButtonsComponent implements ICellRendererAngularComp {
  public params: any;

  constructor(
    private flashMessages: FlashMessagesService,
    private commonService: CommonService,
    public matDialog: MatDialog
  ) { }

  agInit(params: any): void {
    this.params = params;
  }

  editUser() {
    const dialogRef = this.matDialog.open(EditUserComponent, {
      data: {
        name: 'Edit user',
        _id: this.params.data._id,
        firstName: this.params.data.firstName,
        lastName: this.params.data.lastName,
        title: this.params.data.title,
        roles: this.params.data.roles,
        status: this.params.data.status
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refreshTableFromButtons();
    });
  }

  deleteUser(): void {
    const deletedUser = { _id: this.params.data._id };
    this.commonService.deleteUser(deletedUser).subscribe(data => {
      if (!data.success) {
        this.flashMessages.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
        this.refreshTableFromButtons();
        return false;
      } else {
        this.flashMessages.show(data.msg, {
          cssClass: 'alert-success',
          timeout: 2000
        });
        this.refreshTableFromButtons();
        return false;
      }
    });
  }

  refreshTableFromButtons() {
    this.params.context.componentParent.methodFromParent();
  }

  refresh(): boolean {
    return true;
  }
}

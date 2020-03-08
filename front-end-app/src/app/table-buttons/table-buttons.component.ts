import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { CommonService } from '../common.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-buttons',
  templateUrl: './table-buttons.component.html',
  styleUrls: ['./table-buttons.component.css']
})
export class TableButtonsComponent implements ICellRendererAngularComp {
  public params: any;
  constructor(
    private flashMessages: FlashMessagesService,
    private commonService: CommonService
  ) { }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
      return false;
  }

  editUser() {
    console.log('this.params', this.params.data);
  }

  deleteUser() {
    const deletedUser = { _id: this.params.data._id };
    this.commonService.deleteUser(deletedUser).subscribe(data => {
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

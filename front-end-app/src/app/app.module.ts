import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TableButtonsComponent } from './table-buttons/table-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckFormService } from './check-form.service';
import { CommonService } from './common.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { AgGridModule } from 'ag-grid-angular';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const appRoute: Routes = [
  {path: '', component: UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserComponent,
    TableButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    CheckFormService,
    CommonService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
  ]

})
export class AppModule { }

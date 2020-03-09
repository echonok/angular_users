import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TableButtonsComponent } from './table-buttons/table-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckFormService } from './check-form.service';
import { CommonService } from './common.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { AgGridModule } from 'ag-grid-angular';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { DatePipe } from '@angular/common';

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
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule,
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    CheckFormService,
    CommonService,
    DatePipe
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ]

})
export class AppModule { }

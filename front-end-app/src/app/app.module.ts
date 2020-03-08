import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckFormService } from './check-form.service';
import { CommonService } from './common.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';

const appRoute: Routes = [
  {path: '', component: UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule
  ],
  providers: [
    CheckFormService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

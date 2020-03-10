import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-app';

  addUser(True) {
    this.refreshTable();
  }

  eventsSubject: Subject<void> = new Subject<void>();

  refreshTable() {
    this.eventsSubject.next();
  }

}
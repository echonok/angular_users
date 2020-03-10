import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: Http
  ) { }

  addUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(
      'api/addUser',
      user,
      {headers: headers}).pipe(map(res => res.json()));
  }

  editUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(
      'api/editUser',
      user,
      {headers: headers}).pipe(map(res => res.json()));
  }

  deleteUser(id) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(
      'api/deleteUser',
      id,
      {headers: headers}).pipe(map(res => res.json()));
  }

  getAllUsers() {
    return this.http.get(
      'api/getAllUsers'
    ).pipe(map(res => res.json()));
  }
}

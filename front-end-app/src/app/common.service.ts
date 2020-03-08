import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  addUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(
      'http://localhost:3000/api/addUser',
      user,
      {headers: headers}).pipe(map(res => res.json()));
  }

  getAllUsers() {
    return this.http.get(
      'http://localhost:3000/api/getAllUsers'
    )
  }
}

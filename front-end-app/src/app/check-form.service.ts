import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }
  checkValue(value) {
    if (value === '') {
      return false;
    } else {
      return true;
    }
  }
}

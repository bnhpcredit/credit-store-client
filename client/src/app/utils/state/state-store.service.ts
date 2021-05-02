import { Injectable } from '@angular/core';
import {StateSubject} from './state-subject';

@Injectable({
  providedIn: 'root'
})
export class StateStoreService {
  name = new StateSubject<string>();
  idNumber = new StateSubject<number>();
  phone = new StateSubject<number>();
  otp = new StateSubject<number>();
  loanAmount = new StateSubject<number>();
  payments = new StateSubject<number>();
  startDate = new StateSubject<number>();

  constructor() { }

}

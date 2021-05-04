import { Injectable } from '@angular/core';
import {StateSubject} from './state-subject';
import {Occupation} from "../models/occupation.enum";
import {Accommodation} from "../models/accommodation.enum";

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
  occupation: Occupation;
  accommodation: Accommodation;

  constructor() { }

}

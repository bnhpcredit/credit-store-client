import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StateStoreService} from './utils/state/state-store.service';
import {OffersList} from "./utils/models/offers-list";
let mockOtp = 1;
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private stateStore: StateStoreService) { }

  rootURL = '/api';

  sendOtp() {
    this.stateStore.otp.clear();
    // simulate async request
    setTimeout(() => {
      const otp = mockOtp++;
      this.stateStore.otp.update(otp);
    }, 2000);
  }

  getOffersLis() {
    // simulate async request
    setTimeout(() => {
      const offersList: OffersList = {
        list: [
          {
            description: 'הלוואה למטרות מיוחדות',
            id: 1
          },
          {
            description: 'הלוואה לכיסוי חובות',
            id: 2
          },
        ]
      };
      this.stateStore.offersList.update(offersList);
    }, 2000);
  }

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user});
  }

}

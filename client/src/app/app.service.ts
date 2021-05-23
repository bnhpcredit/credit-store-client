import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StateStoreService} from './utils/state/state-store.service';
import { Subject } from 'rxjs';
import { OffersList } from './utils/models/offers-list';
import {ProductLoanTypes} from "./utils/models/product-loan-types.enum";

let mockOtp = 123456;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  subject = new Subject<any>();
  //toogleLastStage = new Subject<any>();

  sendForm(form, step) {
    this.subject.next({form, step});
  }

  constructor(private http: HttpClient, private stateStore: StateStoreService) {
  }

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
      const offersList: OffersList = this.getMockOfferList();
      this.stateStore.offersList.update(offersList);
    }, 2000);
  }

  getMockOfferList(): OffersList {
    return new OffersList({
      loans: [
        {
          id: "85d41c57-b921-42af-97a9-6cca2540f14c",
          productType: ProductLoanTypes.Vacation,
          productTypeName: "הלוואה מהירה לכל מטרה עד ₪20,000",
          loanType: 1,
          loanAmount: 20000,
          numberOfPayments: 32,
          startDate: "2021-05-09",
          endDate: "2021-05-09",
          firstPaymentDate: "2021-05-09"
        },
        {
          id: "85d41c57-b921-42af-97a9-6cca2540f14c",
          productType: ProductLoanTypes.Car,
          productTypeName: "הלוואה בערבות פנסיה עד ₪100,000",
          loanType: 2,
          loanAmount: 100000,
          numberOfPayments: 52,
          startDate: "2021-05-09",
          endDate: "2021-05-09",
          firstPaymentDate: "2021-05-09"
        },
        {
          id: "85d41c57-b921-42af-97a9-6cca2540f14c",
          productType: ProductLoanTypes.Department,
          productTypeName: "הלוואה דיגיטלית בקליק עד ₪50,000",
          loanType: 2,
          loanAmount: 100000,
          numberOfPayments: 52,
          startDate: "2021-05-09",
          endDate: "2021-05-09",
          firstPaymentDate: "2021-05-09"
        }
      ]
    });
  }

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user});
  }

  // onShowLastStage(){
  //   this.toogleLastStage.next();
  // }


}

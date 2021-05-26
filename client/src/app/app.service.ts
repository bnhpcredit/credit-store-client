import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StateStoreService } from "./utils/state/state-store.service";
import { OffersList } from "./utils/models/offers-list";
import { CreditOtpService } from "./services/credit-otp/credit-otp.service";
import { CreditOffersService } from "./services/credit-offers/credit-offers.service";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(
    private http: HttpClient,
    private stateStore: StateStoreService,
    private creditOtpService: CreditOtpService,
    private creditOffersService: CreditOffersService
  ) {}

  rootURL = "/api";

  getOffersList() {
    this.creditOffersService
      .get({ partyId: this.stateStore.idNumber.value.toString() })
      .subscribe((productsData) => {
        this.stateStore.offersList.update(
          new OffersList({ loans: productsData.products.loanOffers })
        );
      });
  }

  getUsers() {
    return this.http.get(this.rootURL + "/users");
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + "/user", { user });
  }

  sendOtp() {
    return this.creditOtpService
      .post({ phone: this.stateStore.phone.value.toString() })
      .subscribe((otpData) => {
        console.log(otpData.otp);
        this.stateStore.otp.update(otpData.otp);
      });
  }

  validateOtp(otp) {
    return this.creditOtpService.get({
      phone: this.stateStore.phone.value.toString(),
      otp: otp,
    });
  }
}

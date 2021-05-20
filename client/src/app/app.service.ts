import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StateStoreService} from './utils/state/state-store.service';
import { Subject } from 'rxjs';
let mockOtp = 1;
@Injectable({
  providedIn: 'root'
})
export class AppService {
  subject = new Subject<any>();
  toogleLastStage = new Subject<any>();

  sendForm(form, step) {
    this.subject.next({ form, step });
  }
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

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user});
  }

  showLastStage(){
    this.toogleLastStage.next();
  }


}

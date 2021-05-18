import {Component, OnDestroy, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from './app.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ScreenStages} from './screen-stages.enum';
import {MatSidenav} from '@angular/material/sidenav';
import { CreditOtpService } from './services/credit-otp/credit-otp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy {
  @ViewChild(MatSidenav) sidenav;
  screenStages = ScreenStages;
  screenStage = ScreenStages.Intro;

  constructor(private appService: AppService, private otp: CreditOtpService) {
    this.otp.post({phone: '123456'}).subscribe(({otp}) => {
      this.otp.get({phone: '123456', otp: otp}).subscribe(res => console.log('Got res:', res))
    })
  }

  userForm = new FormGroup({
    phone: new FormControl('', Validators.nullValidator && Validators.required),
    idNumber: new FormControl('', Validators.nullValidator && Validators.required)
  });

  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  showStage(screenStage: ScreenStages, sidenavToggle = false) {
    this.screenStage = screenStage;
    if (screenStage === ScreenStages.Otp) {
      this.appService.sendOtp();
    }
    if (sidenavToggle) {
      this.sidenav.toggle();
    }
  }

  onSubmit() {
    this.appService.addUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.userCount = this.userCount + 1;
      console.log(this.userCount);
      this.userForm.reset();
    });
  }

  getAllUsers() {
    this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
        this.users = users;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from './app.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ScreenStages} from './screen-stages.enum';
import { CreditOtpService } from './services/credit-otp/credit-otp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy {
  screenStages = ScreenStages;
  screenStage = ScreenStages.Intro;

  constructor(private appService: AppService, private otp: CreditOtpService) {
    this.otp.get({phone: '1234', otp: '1234'}).subscribe(res => console.log(res));
  }

  userForm = new FormGroup({
    phone: new FormControl('', Validators.nullValidator && Validators.required),
    idNumber: new FormControl('', Validators.nullValidator && Validators.required)
  });

  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  showStage(screenStage: ScreenStages) {
    this.screenStage = screenStage;
    this.screenStage = screenStage;
    switch (screenStage) {
      case ScreenStages.Otp:
        this.appService.sendOtp();
        break;
      case ScreenStages.OffersLis:
        this.appService.getOffersLis();
        break;
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

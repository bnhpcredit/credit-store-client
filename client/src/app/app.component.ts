import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AppService } from "./app.service";
import { takeUntil } from "rxjs/operators";
import { interval, Subject, Subscription } from "rxjs";
import { ScreenStages } from "./screen-stages.enum";
import { MatSidenav } from "@angular/material/sidenav";
import { CreditOtpService } from "./services/credit-otp/credit-otp.service";
import { ThisReceiver } from "@angular/compiler";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy{
  @ViewChild(MatSidenav) sidenav;
  screenStages = ScreenStages;
  screenStage = ScreenStages.Intro;
  displayStepper = false;

  onDisplayStepper() {
    this.displayStepper = true;
  }

  constructor(private appService: AppService, private otp: CreditOtpService) {

    this.loadContent();
    this.otp
      .get({ phone: "1234", otp: "1234" })
      .subscribe((res) => console.log(res));
  }


  userForm = new FormGroup({
    phone: new FormControl("", Validators.nullValidator && Validators.required),
    idNumber: new FormControl(
      "",
      Validators.nullValidator && Validators.required
    ),
  });

  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  showStage(screenStage: ScreenStages, sidenavToggle = false) {
    this.screenStage = screenStage;
    // if (screenStage === ScreenStages.Otp) {
    //   this.appService.sendOtp();
    // }
    if (sidenavToggle) {
      this.sidenav.toggle();
    }
  }

  onSubmit() {
    this.appService
      .addUser(this.userForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log("message::::", data);
        this.userCount = this.userCount + 1;
        console.log(this.userCount);
        this.userForm.reset();
      });
  }

  getAllUsers() {
    this.appService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any[]) => {
        this.users = users;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  otpp: string;
  showOtpComponent = true;
  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "",
    inputStyles: {
      width: "50px",
      height: "50px",
    },
  };
  onOtpChange(otp) {
    this.otp = otp;
  }

  setVal(val) {
    this.ngOtpInput.setValue(val);
  }

  toggleDisable() {
    if (this.ngOtpInput.otpForm) {
      if (this.ngOtpInput.otpForm.disabled) {
        this.ngOtpInput.otpForm.enable();
      } else {
        this.ngOtpInput.otpForm.disable();
      }
    }
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }

  value = 0;
  loading = true;


  loadContent() {
    this.loading = true;

    const subs$: Subscription = interval(200).subscribe(res => {
        this.value++
        if(this.value === 10){
          subs$.unsubscribe();
          this.loading = false;
        }
      });

  }

  spinner: AnimationOptions = {
    path: "/assets/lotties/1370-confetti.json",
    loop: true,
  };

}

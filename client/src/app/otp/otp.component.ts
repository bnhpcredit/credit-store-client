import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { StateStoreService } from "../utils/state/state-store.service";
import { AppService } from "../app.service";
import { Observable, BehaviorSubject, Subscription } from "rxjs";
import { delay } from "rxjs/operators";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.component.html",
  styleUrls: ["./otp.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpComponent implements OnInit, OnDestroy {
  @Output() next = new EventEmitter<void>();
  isSubmitted = false;
  otp: string = null;
  otpData: string = null;
  private _sub: Subscription;

  frmStepTwo: FormGroup;
  frmStepTwo$: Observable<FormGroup>;
  private myFrmStepTwo$ = new BehaviorSubject<FormGroup>(null);
  myFrmStepTwoListener$: Observable<FormGroup> =
    this.myFrmStepTwo$.asObservable();

  myFrmStepTwo(form: FormGroup) {
    this.myFrmStepTwo$.next(form);
  }

  constructor(
    private formBuilder: FormBuilder,
    public stateStore: StateStoreService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.myFrmStepTwo(this.frmStepTwo);
    this.frmStepTwo$ = this.myFrmStepTwoListener$.pipe(delay(0));
  }

  createForm() {
    this.frmStepTwo = this.formBuilder.group({
      otpReceived: ["1234", [Validators.required, this.otpOK()]],
    });
  }

  formControl(name: string) {
    return this.frmStepTwo.get(name) as FormControl;
  }

  otpOK(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const otpValid = this.stateStore.otp.value === +value;
      return !otpValid ? { otpValid: true } : null;
    };
  }

  onSubmit() {
    this.isSubmitted = true;
   this._sub = this.appService
      .validateOtp(this.frmStepTwo.get("otpReceived").value)
      .subscribe((res) => {
        if (res.verified && this.frmStepTwo.valid) {
          console.log(res);
          this.next.emit();
        }
      });
    this.otp = null;
  }

  resendOtp() {
    console.log("on reset otp");
    this.frmStepTwo.reset();
    this.appService.sendOtp();
  }

  spinner: AnimationOptions = {
    path: "/assets/lotties/spinner.json",
    loop: true,
  };

  onOtpChange(otp) {
    this.otp = otp;
    this.frmStepTwo.controls["otpReceived"].setValue(otp);
  }

  otpLotiie: AnimationOptions = {
    path: "/assets/lotties/otp.json",
    loop: true,
  };

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}

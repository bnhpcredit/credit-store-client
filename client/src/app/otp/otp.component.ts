import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
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
import { Observable, BehaviorSubject } from "rxjs";
import { delay } from "rxjs/operators";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.component.html",
  styleUrls: ["./otp.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  isSubmitted = false;
  frmStepTwo: FormGroup;
  frmStepTwo$: Observable<FormGroup>;
  otp:string = null;

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
      otpReceived: [null, [Validators.required, this.otpOK()]],
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
      console.log(this.stateStore.otp.value)
      const otpValid = this.stateStore.otp.value === +value;
      return !otpValid ? { otpValid: true } : null;
    };
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.frmStepTwo.valid)
    if (this.frmStepTwo.valid) {
      this.next.emit();
    }
    this.otp=null;
  }

  resendOtp() {
    this.frmStepTwo.reset();
    this.appService.sendOtp();
  }

  spinner: AnimationOptions = {
      path: "/assets/lotties/spinner.json",
      loop: true,
  };

  onOtpChange(otp){
    this.otp = otp;
    this.frmStepTwo.controls['otpReceived'].setValue(otp);
  }

  otpLotiie: AnimationOptions = {
      path: "/assets/lotties/otp.json",
      loop: true,
  };

}

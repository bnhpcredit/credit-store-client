import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {StateStoreService} from '../utils/state/state-store.service';
import {AppService} from '../app.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtpComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  isSubmitted = false;

  frmStepTwo: FormGroup;
  frmStepTwo$: Observable<FormGroup>;

  private myFrmStepTwo$ = new BehaviorSubject<FormGroup>(null);
  myFrmStepTwoListener$: Observable<
    FormGroup
  > = this.myFrmStepTwo$.asObservable();
  myFrmStepTwo(form: FormGroup) {
    this.myFrmStepTwo$.next(form);
  }

  constructor(private formBuilder: FormBuilder,
              public stateStore: StateStoreService,
              private appService: AppService) { }

  ngOnInit(): void {
    this.createForm();
    this.myFrmStepTwo(this.frmStepTwo);
    this.frmStepTwo$ = this.myFrmStepTwoListener$.pipe(delay(0));
  }

  createForm() {
    this.frmStepTwo = this.formBuilder.group({
      otpReceived: [null,
        [Validators.required, this.otpOK()]
      ],
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
      console.log("otpValid " + otpValid);
      return !otpValid ? {otpValid : true} : null;
    };
  }

  onSubmit() {
    alert('onSubmit')
    this.isSubmitted = true;
    if (this.frmStepTwo.valid) {
      console.log("yessssssssssss")
      this.next.emit();
    }else{
      console.log("noooooooooooooooooo")
    }
  }

  resendOtp() {
    this.frmStepTwo.reset();
    this.appService.sendOtp();
  }

}



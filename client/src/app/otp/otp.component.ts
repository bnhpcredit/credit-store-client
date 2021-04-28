import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {StateStoreService} from '../utils/state/state-store.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtpComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  formGroup: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              public stateStore: StateStoreService,
              private appService: AppService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      otpReceived: [null,
        [Validators.required, this.otpOK()]
      ],
    });
  }

  formControl(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  otpOK(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const otpValid = this.stateStore.otp.value === +value;
      return !otpValid ? {otpValid : true} : null;
    };
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.formGroup.valid) {
      this.next.emit();
    }
  }

  resendOtp() {
    this.formGroup.reset();
    this.appService.sendOtp();
  }

}

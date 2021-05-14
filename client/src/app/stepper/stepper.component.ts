import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from '../app.service';
import { IdNumberComponent } from '../id-number/id-number.component';
import { OtpComponent } from '../otp/otp.component';
import { ScreenStages } from '../screen-stages.enum';
import { CreditOtpService } from '../services/credit-otp/credit-otp.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {



  // @ViewChild('stepTwo') stepTwoComponent: SecondStepComponent;
  frmStep1;
  frmStep2;
  ngOnInit(): void {
    this.appService.subject.subscribe(data => {
      if (data.step === 1) {
        console.log(data.form.value);
        this.frmStep1 = data.form;
      } else {
        console.log(data.form.value);
        this.frmStep1 = data.form;
      }
    });
  }
  title = 'mat-stepper';

  constructor(private appService: AppService) {}

  @ViewChild('stepOne') stepOneComponent: IdNumberComponent;
  get frmStepOne() {
    return this.stepOneComponent ? this.stepOneComponent.frmStepOne$ : null;
  }
  @ViewChild('stepTwo') stepTwoComponent: OtpComponent;

  get frmStepTwo() {
    return this.stepTwoComponent ? this.stepTwoComponent.frmStepTwo$ : null;
  }

}

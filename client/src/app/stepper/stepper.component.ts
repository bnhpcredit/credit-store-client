import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from '../app.service';
import { IdNumberComponent } from '../id-number/id-number.component';
import { OtpComponent } from '../otp/otp.component';
import { QueriesComponent } from '../queries/queries.component';
import { ScreenStages } from '../screen-stages.enum';
import { CreditOtpService } from '../services/credit-otp/credit-otp.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent  {



  // @ViewChild('stepTwo') stepTwoComponent: SecondStepComponent;


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
  @ViewChild('stepThree') stepThreeComponent: QueriesComponent;

  get frmStepThree() {
    return this.stepThreeComponent ? this.stepThreeComponent.frmStepThree$ : null;
  }

}

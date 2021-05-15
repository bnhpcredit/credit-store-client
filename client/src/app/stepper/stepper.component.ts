import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { IdNumberComponent } from '../id-number/id-number.component';
import { OtpComponent } from '../otp/otp.component';
import { QueriesComponent } from '../queries/queries.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StepperComponent  {




  completed: boolean = false;
  state: string;
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

  done() {
    this.completed = true;
    this.state = 'done';
  }

}
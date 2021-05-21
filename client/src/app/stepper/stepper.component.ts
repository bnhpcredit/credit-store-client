import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";
import { AppService } from "../app.service";
import { IdNumberComponent } from "../id-number/id-number.component";
import { LoanDetailsComponent } from "../loan-details/loan-details.component";
import { OffersListComponent } from "../offers-list/offers-list.component";
import { OtpComponent } from "../otp/otp.component";
import { QueriesComponent } from "../queries/queries.component";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],

})
export class StepperComponent   {
  completed: boolean = false;
  state: string;
  title = "mat-stepper";
  showLoanDetails = false;
  finish = false;
  @Output() next = new EventEmitter<void>();

  constructor(private appService: AppService) {}

  @ViewChild("stepOne") stepOneComponent: IdNumberComponent;
  get frmStepOne() {
    return this.stepOneComponent ? this.stepOneComponent.frmStepOne$ : null;
  }
  @ViewChild("stepTwo") stepTwoComponent: OtpComponent;

  get frmStepTwo() {
    return this.stepTwoComponent ? this.stepTwoComponent.frmStepTwo$ : null;
  }
  @ViewChild("stepThree") stepThreeComponent: QueriesComponent;

  get frmStepThree() {
    return this.stepThreeComponent
      ? this.stepThreeComponent.frmStepThree$
      : null;
  }

  @ViewChild("stepFour") stepFourComponent: OffersListComponent;

  get frmStepFour() {
    return this.stepThreeComponent ? this.stepFourComponent.frmStepFour$ : null;
  }

  @ViewChild("stepFive") stepFiveComponent: LoanDetailsComponent;

  get frmStepFive() {
    return this.stepFiveComponent ? this.stepFiveComponent.frmStepFive$ : null;
  }

  showLastStage() {
    this.showLoanDetails = true;
    this.next.emit();
  }

  finishLastStage(){
    this.finish = true;
  }

  confetti: AnimationOptions = {
      path: "/assets/lotties/35875-confetti-on-transparent-background (1).json",
      loop: false,
  };

  finishLottie: AnimationOptions = {
    path: "/assets/lotties/finish.json",
    loop: true,
};
}

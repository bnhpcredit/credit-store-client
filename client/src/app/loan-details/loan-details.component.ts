import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable, BehaviorSubject } from "rxjs";
import { StateStoreService } from "../utils/state/state-store.service";

@Component({
  selector: "app-loan-details",
  templateUrl: "./loan-details.component.html",
  styleUrls: ["./loan-details.component.scss"],
})
export class LoanDetailsComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  today = new Date().toDateString();
  titleAlert = "שדה זה נדרש";
  frmStepFive: FormGroup;
  frmStepFive$: Observable<FormGroup>;

  private myFrmStepFive$ = new BehaviorSubject<FormGroup>(null);
  myFrmStepFiveListener$: Observable<FormGroup> =
    this.myFrmStepFive$.asObservable();
  myFrmStepFive(form: FormGroup) {
    this.myFrmStepFive$.next(form);
  }

  formControl(name: string) {
    return this.frmStepFive.get(name) as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
    private stateStore: StateStoreService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.frmStepFive = this.formBuilder.group({
      loanAmount: [null, Validators.required],
      payments: [null, [Validators.required, Validators.maxLength(3)]],
      startDate: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.frmStepFive.valid) {
      this.stateStore.loanAmount.update(
        this.frmStepFive.get("loanAmount").value
      );
      this.stateStore.payments.update(this.frmStepFive.get("payments").value);
      this.stateStore.startDate.update(this.frmStepFive.get("startDate").value);
      this.next.emit();
    }
  }
}

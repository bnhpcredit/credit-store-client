import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Occupation } from "../utils/models/occupation.enum";
import { Accommodation } from "../utils/models/accommodation.enum";
import { StateStoreService } from "../utils/state/state-store.service";
import { Observable, BehaviorSubject } from "rxjs";
import {AnimationOptions} from "ngx-lottie";

@Component({
  selector: "app-offers-list",
  templateUrl: "./offers-list.component.html",
  styleUrls: ["./offers-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersListComponent implements OnInit {
  @Output() next = new EventEmitter<void>();

  // frmStepFour
  occupations = Occupation;
  accommodations = Accommodation;
  titleAlert = "שדה זה נדרש";
  isSubmitted = false;

  frmStepFour: FormGroup;
  frmStepFour$: Observable<FormGroup>;
  private myFrmStepFour$ = new BehaviorSubject<FormGroup>(null);
  myFrmStepFourListener$: Observable<FormGroup> =
    this.myFrmStepFour$.asObservable();

  myFrmStepFour(form: FormGroup) {
    this.myFrmStepFour$.next(form);
  }

  constructor(
    private formBuilder: FormBuilder,
    public stateStore: StateStoreService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.frmStepFour = this.formBuilder.group({
      selectedOffer: [null, Validators.required]
    });
  }

  formControl(name: string) {
    return this.frmStepFour.get(name) as FormControl;
  }

  searching: AnimationOptions = {
    path: "/assets/lotties/searching.json",
    loop: true,
  };

  nextStage() {
    this.isSubmitted = true;
    if (this.frmStepFour.valid) {
      this.next.emit();
    }
  }
}

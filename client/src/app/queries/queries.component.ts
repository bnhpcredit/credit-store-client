import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Occupation } from "../utils/models/occupation.enum";
import { Accommodation } from "../utils/models/accommodation.enum";
import { StateStoreService } from "../utils/state/state-store.service";
import { Observable, BehaviorSubject } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-queries",
  templateUrl: "./queries.component.html",
  styleUrls: ["./queries.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueriesComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  occupations = Occupation;
  accommodations = Accommodation;
  titleAlert = "שדה זה נדרש";
  isSubmitted = false;

  frmStepThree: FormGroup;
  frmStepThree$: Observable<FormGroup>;

  private myFrmStepThree$ = new BehaviorSubject<FormGroup>(null);
  myFrmStepThreeListener$: Observable<FormGroup> =
    this.myFrmStepThree$.asObservable();
  myFrmStepThree(form: FormGroup) {
    this.myFrmStepThree$.next(form);
  }

  constructor(
    private formBuilder: FormBuilder,
    public stateStore: StateStoreService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.myFrmStepThree(this.frmStepThree);
    this.frmStepThree$ = this.myFrmStepThreeListener$.pipe(delay(0));
  }

  createForm() {
    this.frmStepThree = this.formBuilder.group({
      occupation: [null, [Validators.required]],
      accommodation: [null, [Validators.required]],
    });
  }

  formControl(name: string) {
    return this.frmStepThree.get(name) as FormControl;
  }

  nextStage() {
    this.isSubmitted = true;
    if (this.frmStepThree.valid) {
      this.stateStore.occupation = this.formControl("occupation").value;
      this.stateStore.accommodation = this.formControl("accommodation").value;
      this.next.emit();
    }
  }
}

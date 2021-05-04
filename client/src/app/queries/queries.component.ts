import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Occupation} from "../utils/models/occupation.enum";
import {Accommodation} from "../utils/models/accommodation.enum";
import {StateStoreService} from "../utils/state/state-store.service";

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueriesComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  formGroup: FormGroup;
  occupations = Occupation;
  accommodations = Accommodation;
  titleAlert = 'שדה זה נדרש';
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              public stateStore: StateStoreService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      occupation: [null,
        [Validators.required]
      ],
      accommodation: [null,
        [Validators.required]
      ],
    });
  }

  formControl(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  nextStage() {
    this.isSubmitted = true;
    if (this.formGroup.valid) {
      this.stateStore.occupation = this.formControl('occupation').value;
      this.stateStore.accommodation = this.formControl('accommodation').value;
      this.next.emit();
    }
  }
}

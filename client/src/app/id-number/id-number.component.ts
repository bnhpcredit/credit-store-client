import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import {StateStoreService} from '../utils/state/state-store.service';

@Component({
  selector: 'app-id-number',
  templateUrl: './id-number.component.html',
  styleUrls: ['./id-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdNumberComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  formGroup: FormGroup;
  titleAlert = 'שדה זה נדרש';
  frmStepOne: FormGroup;
  frmStepOne$: Observable<FormGroup>;

  private myFrmStepOne$ = new BehaviorSubject<FormGroup>(null);
  myFrmStepOneListener$: Observable<
    FormGroup
  > = this.myFrmStepOne$.asObservable();
  myFrmStepOne(form: FormGroup) {
    this.myFrmStepOne$.next(form);
  }

  formControl(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  constructor(private formBuilder: FormBuilder, private stateStore: StateStoreService) { }

  ngOnInit(): void {
    this.createForm();
    this.myFrmStepOne(this.frmStepOne);
    this.frmStepOne$ = this.myFrmStepOneListener$.pipe(delay(0));
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      idNumber: [null, Validators.required],
      phone: [null, Validators.required],
    });
  }


  onSubmit() {
    if (this.formGroup.valid) {
      this.stateStore.name.update(this.formGroup.get('name').value);
      this.stateStore.idNumber.update(this.formGroup.get('idNumber').value);
      this.stateStore.phone.update(this.formGroup.get('phone').value);
      this.next.emit();
    }
  }

}

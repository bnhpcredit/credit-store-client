import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StateStoreService} from '../utils/state/state-store.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  today = new Date().toDateString();
  formGroup: FormGroup;
  titleAlert = 'שדה זה נדרש';

  formControl(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  constructor(private formBuilder: FormBuilder, private stateStore: StateStoreService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      loanAmount: [null, Validators.required],
      payments: [null, [Validators.required, Validators.maxLength(3)]],
      startDate: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.stateStore.loanAmount.update(this.formGroup.get('loanAmount').value);
      this.stateStore.payments.update(this.formGroup.get('payments').value);
      this.stateStore.startDate.update(this.formGroup.get('startDate').value);
      this.next.emit();
    }
  }
}

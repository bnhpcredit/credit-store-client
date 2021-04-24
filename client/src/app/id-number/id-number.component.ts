import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-id-number',
  templateUrl: './id-number.component.html',
  styleUrls: ['./id-number.component.scss']
})
export class IdNumberComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  formGroup: FormGroup;
  titleAlert = 'שדה זה נדרש';

  formControl(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
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
      this.next.emit();
    }
  }

}

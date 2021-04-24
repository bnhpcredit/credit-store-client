import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  @Output() next = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  nextStage() {
    this.next.emit();
  }
}

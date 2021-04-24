import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-id-number',
  templateUrl: './id-number.component.html',
  styleUrls: ['./id-number.component.scss']
})
export class IdNumberComponent implements OnInit {
  @Output() next = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  nextStage() {
    this.next.emit();
  }

}

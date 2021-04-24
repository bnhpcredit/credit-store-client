import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {
  @Output() next = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  nextStage() {
    this.next.emit();
  }
}

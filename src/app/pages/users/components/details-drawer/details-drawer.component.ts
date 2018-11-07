import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../models';

@Component({
  selector: 'app-user-details-drawer',
  templateUrl: './details-drawer.component.html',
  styleUrls: ['./details-drawer.component.scss']
})
export class DetailsDrawerComponent implements OnInit {
  @Input()
  visible: boolean;
  @Input()
  user: User;
  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onVisibleChange(visible) {
    // just pass event to the parent component
    this.visibleChange.emit(visible);
  }
}

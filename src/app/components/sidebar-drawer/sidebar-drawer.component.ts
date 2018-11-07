import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar-drawer',
  templateUrl: './sidebar-drawer.component.html',
  styleUrls: ['./sidebar-drawer.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [style({ transform: 'scale3d(.3, .3, .3)' }), animate(100)]),
      transition('* => void', [animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))])
    ])
  ]
})
export class SidebarDrawerComponent implements OnInit {
  @Input()
  closable = true;
  @Input()
  visible: boolean;
  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}

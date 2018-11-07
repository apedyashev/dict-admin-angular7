import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details-drawer',
  templateUrl: './details-drawer.component.html',
  styleUrls: ['./details-drawer.component.scss']
})
export class DetailsDrawerComponent implements OnInit {
  @Input()
  visible: boolean;

  constructor() {}

  ngOnInit() {}
}

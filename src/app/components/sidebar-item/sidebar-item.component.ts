import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  link: string;
  @Input()
  icon: string;

  constructor() {}

  ngOnInit() {
    // console.log('this.title', this.title);
  }
}

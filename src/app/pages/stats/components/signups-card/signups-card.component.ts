import { Component, OnInit } from '@angular/core';
import {StatsService } from '../../../../services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signups-card',
  templateUrl: './signups-card.component.html',
  styleUrls: ['./signups-card.component.scss']
})
export class SignupsCardComponent implements OnInit {
  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.statsService
      .getSignups()
      .pipe(first())
      .subscribe(({ items, pagination }) => {
        console.log('items, pagination', items, pagination);
      });
  }
}

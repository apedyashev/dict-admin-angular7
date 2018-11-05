import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services';
import { first } from 'rxjs/operators';
import { User } from '../../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['firstName', 'email', 'locale', 'timezone'];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService
      .getAll()
      .pipe(first())
      .subscribe(({ items }) => {
        this.users = items;
      });
  }
}

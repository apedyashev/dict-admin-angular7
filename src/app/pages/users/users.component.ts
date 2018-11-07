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
  showUserDetails = false;
  users: User[] = [];
  selectedUser: User = null;
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

  onClick(row) {
    this.showUserDetails = true;
    this.selectedUser = row;
  }
  visibleChange(isDrawerVisible) {
    this.showUserDetails = isDrawerVisible;
    if (!isDrawerVisible) {
      this.selectedUser = null;
    }
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
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
  pageSize = 20;
  totalUsersLength = 0;
  query = {};

  constructor(private usersService: UsersService) {}

  fetchUsers(query) {
    this.usersService
      .getAll(query)
      .pipe(first())
      .subscribe(({ items, pagination }) => {
        this.users = items;
        this.totalUsersLength = pagination.total;
      });
  }
  ngOnInit() {
    const query = { perPage: this.pageSize };
    this.fetchUsers(query);
  }

  onClick(row: User) {
    this.showUserDetails = true;
    this.selectedUser = row;
  }

  visibleChange(isDrawerVisible: boolean) {
    this.showUserDetails = isDrawerVisible;
    if (!isDrawerVisible) {
      this.selectedUser = null;
    }
  }

  pageEvent(pageEvent) {
    this.query = { page: pageEvent.pageIndex + 1, perPage: pageEvent.pageSize };
    this.fetchUsers(this.query);
  }

  onMatSortChange(sortEvent) {
    if (sortEvent.direction) {
      this.query.sortBy = `${sortEvent.active}:${sortEvent.direction}`;
    } else {
      delete this.query.sortBy;
    }

    this.fetchUsers(this.query);
  }
}

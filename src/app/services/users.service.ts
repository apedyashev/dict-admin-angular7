import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { environment as config } from '../../environments/environment';

class Pagination {
  page: number;
  pages: number;
  perPage: number;
  total: number;
}
class ListReponse {
  items: User[] = [];
  pagination: Pagination;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(params) {
    return this.http.get<ListReponse>(`${config.apiUrl}/users`, { params });
  }
}

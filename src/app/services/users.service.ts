import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { environment as config } from '../../environments/environment';

class ListReponse {
  items: User[] = [];
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ListReponse>(`${config.apiUrl}/users`);
  }
}

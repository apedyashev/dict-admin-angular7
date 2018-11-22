import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as config } from '../../environments/environment';

class StatsReponse {
  // items: User[] = [];
  // pagination: Pagination;
}
@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(private http: HttpClient) {}

  getSignups(params) {
    return this.http.get<ListReponse>(`${config.apiUrl}/stats/signups`, { params });
  }
}

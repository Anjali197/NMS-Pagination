import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IUserDetails,
  IUserDetailsResponse,
} from './features/pagination/user.type';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  user: any[] = [];
  constructor(private http: HttpClient) {}
  url = 'http://164.52.200.24:6204/users/get-all';

  getAllUsers(
    pageNumber: number,
    pageSize: number,
    sortOrder?: string,
    sortProperty?: string
  ) {
    const data = {
      headers: {
        pageNumber: pageNumber,
        pageSize: pageSize,
        // sortOrder: sortOrder,
        // sortProperty: sortProperty,
      },
    };
    // const newdata = {
    //   ...data.headers,

    // };
    // return this.http.post<IUserDetailsResponse>(this.url, data);
    if (sortOrder == '') {
      return this.http.post<IUserDetailsResponse>(this.url, data);
    } else {
      return this.http.post<IUserDetailsResponse>(this.url, {
        headers: {
          pageNumber: pageNumber,
          pageSize: pageSize,
        sortOrder: sortOrder,
        sortProperty: sortProperty,
        }
      });
    }
  }
  private users$ = new BehaviorSubject<IUserDetailsResponse>({
    pageNumber: 0,
    totalPage: 0,
    users: [],
  });
  users = this.users$.asObservable();
}

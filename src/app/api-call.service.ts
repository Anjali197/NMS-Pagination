import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserDetailsResponse } from './features/pagination/user.type';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor( private http:HttpClient) { }
  url='http://164.52.200.24:6204/users/get-all'

getAllUsers(pageNumber:number,pageSize:number){
  const data={
    "headers":{

      "pageNumber":pageNumber,
      "pageSize":pageSize,
      "sortOrder":"desc",
      "sortProperty":"employeeCode"
  }
}
  return this.http.post<IUserDetailsResponse>(this.url,data)
}

}

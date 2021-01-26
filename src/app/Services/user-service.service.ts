import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Classes/User';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
userData;
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/users';


  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  getUsersLList() {
    return this.http.get(this.baseUrl).pipe(
      map(responseData => {
        const data = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            data.push({ ...responseData[key] });
          }
        }
        return data;
      })

    );
  }


  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl+"/"+ id);

  }
  getUserByrole() {
    return this.http.get<User[]>(this.baseUrl + "?userRole=USER");

  }
  getUserBystatus() {
    return this.http.get<User[]>(this.baseUrl + "?accStatus=inactive");

  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl +"/"+ `${id}`, user);
  }

  setUserData(val: object) {
    //console.log(val)
    this.userData = val;
  }
  getUserData() {
    return this.userData;
  }
  getByAccNo(accno) {

    return this.http.get<User>(this.baseUrl + "?account.AccNo=" + accno)

  }




}

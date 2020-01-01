import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {User} from '../model/user.model';
import {userModel} from '../model/userModel';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:5000/users';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  
  loginAuth(user: userModel) {
    return this.http.post<any>(this.baseUrl+'/login',user,this.options);
  }
  
  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}

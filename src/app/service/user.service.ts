import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // BackEnd server address
  userURL: string = "http://localhost:3000/users";
  //httpClient: un livreur
  constructor(private httpClient: HttpClient) { }

  signup(user: any, file: File) {
    let formData = new FormData()
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("address", user.address);
    formData.append("Phone", user.Phone);
    formData.append("role", user.role);
    formData.append("img", file);
    return this.httpClient.post<{ message: boolean }>(this.userURL + "/signup", formData)
  }
  login(user) {
    return this.httpClient.post<{ message: string, user: any }>(this.userURL + "/signin", user)
  }

  //response : Message/Boolean
  addCommentToUser(obj) {
    return this.httpClient.post<{ users: any }>(this.userURL + "/addComment", obj)
  }
  //Response : array of objects
  getAllUsers() {
    return this.httpClient.get(this.userURL)
  }
  getSportScore() {
    return this.httpClient.get<{ users: any }>(this.userURL+"/sport-score")
  }
  //Response : one object
  getUserById(id) {
    return this.httpClient.get<{ user: any }>(`${this.userURL}/${id}`)
  }

  //Response : Message/Boolean
  deleteUser(id) {
    return this.httpClient.delete(`${this.userURL}/${id}`)
  }

  //Response : Message/Boolean
  addUser(obj) {
    return this.httpClient.post(this.userURL, obj)
  }

  //Response : Message/Boolean
  editUser(obj) {
    return this.httpClient.put(this.userURL, obj)
  }
}


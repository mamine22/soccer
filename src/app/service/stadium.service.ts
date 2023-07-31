import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  // backEnd server address
  stadiumURL: string = "http://localhost:3000/stadiums";
  //httpClient: un livreur
  constructor(private httpClient: HttpClient) { }
  //response : array of objects
  getAllStadiums() {
    return this.httpClient.get<{stadiumsTab:any,message:String}>(this.stadiumURL)
  }
  //response : one object
  getStadiumById(id) {
    return this.httpClient.get<{stadium:any}>(`${this.stadiumURL}/${id}`)
  }

  //response : Message/Boolean
  deleteStadium(id) {
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.stadiumURL}/${id}`)
  }

  //response : Message/Boolean
  addStadium(obj) {
    return this.httpClient.post<{message:any}>(this.stadiumURL, obj)
  }

  //response : Message/Boolean
  editStadium(obj) {
    return this.httpClient.put<{isUpdated:boolean}>(this.stadiumURL, obj)
  }
}

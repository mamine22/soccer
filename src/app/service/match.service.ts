import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // backEnd server address
  matchURL: string = "http://localhost:3000/matches";
  //httpClient: un livreur
  constructor(private httpClient: HttpClient) { }
  //response : array of objects
  getAllMatches() {
    return this.httpClient.get<{matchesArray:any,message:String}>(this.matchURL)
  }
  //response : one object
  getMatchById(id) {
    return this.httpClient.get<{match:any}>(`${this.matchURL}/${id}`)
  }

  //response : Message/Boolean
  deleteMatch(id) {
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.matchURL}/${id}`)
  }

  //response : Message/Boolean
  addMatch(obj) {
    return this.httpClient.post<{message:any}>(this.matchURL, obj)
  }
   //response : Message/Boolean
  addComment(obj){
    return this.httpClient.post<{message:any}>(this.matchURL+"/comment",obj)
   }

  //response : Message/Boolean
  getAllMatchesWithComments() {
    return this.httpClient.get<{matches:any}>(this.matchURL+"/comment/getAll")
  }

  //response : Message/Boolean
  editMatch(obj) {
    return this.httpClient.put<{isUpdated:boolean}>(this.matchURL, obj)
  }

  searshMatches(obj){
    return this.httpClient.post<{searshTab:any}>(`${this.matchURL}/searsh`,obj)
  }

}

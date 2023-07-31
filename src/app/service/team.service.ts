import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  // backEnd server address
  teamURL: string = "http://localhost:3000/teams";
  //httpClient: un livreur
  constructor(private httpClient: HttpClient) { }
  //response : array of objects
  getAllTeams() {
    return this.httpClient.get<{teamsTab:any,message:String}>(this.teamURL)
  }
  //response : one object
  getTeamById(id) {
    return this.httpClient.get<{team:any}>(`${this.teamURL}/${id}`)
  }

  //response : Message/Boolean
  deleteTeam(id) {
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.teamURL}/${id}`)
  }

  //response : Message/Boolean
  addTeam(obj) {
    return this.httpClient.post<{message:any}>(this.teamURL, obj)
  }

  //response : Message/Boolean
  editTeam(obj) {
    return this.httpClient.put<{isUpdated:boolean}>(this.teamURL, obj)
  }
  //response : Message/Boolean
  searshTeam(obj) {
    return this.httpClient.put<{searshTab:any}>(this.teamURL+"/searsh-team", obj)
  }

}

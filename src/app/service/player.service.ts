import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // backEnd server address
  playerURL: string = "http://localhost:3000/players";
  //httpClient: un livreur
  constructor(private httpClient: HttpClient) { }
  //response : array of objects
  getAllPlayers() {
    return this.httpClient.get<{playersTab:any,message:String}>(this.playerURL)
  }
  //response : one object
  getPlayerById(id) {
    return this.httpClient.get<{player:any}>(`${this.playerURL}/${id}`)
  }

  //response : Message/Boolean
  deletePlayer(id) {
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.playerURL}/${id}`)
  }

  //response : Message/Boolean
  addPlayer(obj) {
    return this.httpClient.post<{message:any}>(this.playerURL, obj)
  }

  //response : Message/Boolean
  editPlayer(obj) {
    return this.httpClient.put<{isUpdated:boolean}>(this.playerURL, obj)
  }

}

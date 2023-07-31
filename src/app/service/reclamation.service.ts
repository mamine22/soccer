import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  // backEnd server address
  reclamationURL: string = "http://localhost:3000/reclamation";
  //httpClient: un livreur
  constructor(private httpClient: HttpClient) { }
  //response : array of objects

  sendReclamation(obj){
   return this.httpClient.post<{message:any}>(this.reclamationURL,obj)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   // backEnd server address
   weatherURL: string = "http://localhost:3000/weather";
   //httpClient: un livreur
   constructor(private httpClient: HttpClient) { }
   //response : array of objects
 
   getWeather(weather){
    return this.httpClient.post<{weather:any}>(this.weatherURL,weather)
   }
   
}

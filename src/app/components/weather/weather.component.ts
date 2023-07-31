import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }

  weather:any={};
  weatherForm:FormGroup;
  result:any={};
  exist:boolean=false;
  time:any;
  temp:Number;

  searsh(){
    this.weatherService.getWeather(this.weather).subscribe((data)=>
    {
      console.log(this.weather)
      this.result=data.weather;
      this.temp=parseInt(data.weather.temp)
      this.time=new Date().toLocaleTimeString() 
      this.exist=true
    })  
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:any=[
    {id:1,name:"Lionel Messi",nbre:10,image:"assets/images/img_3.jpg"},
    {id:2,name:"Benzima",nbre:9,image:"assets/images/img_2.jpg"},
    {id:3,name:"Neymar",nbre:10,image:"assets/images/img_1.jpg"},
]

  constructor() { }

  ngOnInit() {
  }

}

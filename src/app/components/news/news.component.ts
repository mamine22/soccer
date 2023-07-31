import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any=[
    {id:1,titre:"Lionel Messi",description:"Lorem, ipsum dolor unde veritatis.",image:"assets/images/img_3.jpg",date:"jan 19, 2023"},
    {id:2,titre:"Benzima",description:"Lorem, ipsum dolor unde veritatis.",image:"assets/images/img_2.jpg",date:"jan 29, 2022"},
    {id:3,titre:"Neymar",description:"Lorem, ipsum dolor unde veritatis.",image:"assets/images/img_1.jpg",date:"Mar 19, 2021"},
    {id:3,titre:"Ronaldo",description:"Lorem, ipsum dolor unde veritatis.",image:"assets/images/img_2.jpg",date:"Mar 19, 2021"},
]
  constructor() { }

  ngOnInit() {
  }

}

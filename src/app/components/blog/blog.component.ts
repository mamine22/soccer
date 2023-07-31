import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articlesTab=[
    {image:"assets/images/img_1.jpg",description:"Lorem, ipsum dolor unde veritatis.",titre:"titre 1"},
    {image:"assets/images/img_2.jpg",description:"Lorem, ipsum dolor unde veritatis.",titre:"titre 2"},
    {image:"assets/images/img_3.jpg",description:"Lorem, ipsum dolor unde veritatis.",titre:"titre 3"},
]

  constructor() { }

  ngOnInit() {
  }

}

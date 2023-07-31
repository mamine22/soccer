import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articl',
  templateUrl: './articl.component.html',
  styleUrls: ['./articl.component.css']
})
export class ArticlComponent implements OnInit {
@Input() articleInput:any;
  constructor() { }

  ngOnInit() {
  }

}

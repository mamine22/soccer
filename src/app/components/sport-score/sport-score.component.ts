import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sport-score',
  templateUrl: './sport-score.component.html',
  styleUrls: ['./sport-score.component.css']
})
export class SportScoreComponent implements OnInit {

  constructor(private userService:UserService) { }
teams:any=[];
  ngOnInit() {
    this.userService.getSportScore().subscribe(
      (data) => {
        this.teams=data.users
      }
    )
  }

}

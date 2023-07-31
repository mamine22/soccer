import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  displayedMatch: any = {}
  matches: any = []
  matchId: any = []
  id:any;
  
  constructor(private matchService: MatchService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.matchId = JSON.parse(localStorage.getItem("matchId") || "[]")
    this.id = this.activateRoute.snapshot.paramMap.get("id");

    this.matchService.getMatchById(this.id).subscribe(
      (data) => {   this.displayedMatch=data.match }
    );

  }
}

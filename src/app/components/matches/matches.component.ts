import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any = []
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatchesWithComments().subscribe((data) => {
      console.log("GET all matches with comments", data.matches);
      this.matches = data.matches;
    })

    
  }
  updatedMatches(tab:any){
    this.matches =tab;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-matchs-table',
  templateUrl: './matchs-table.component.html',
  styleUrls: ['./matchs-table.component.css']
})
export class MatchsTableComponent implements OnInit {

  matches: any = [];
  constructor(private router: Router,private matchService:MatchService) { }


  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data)=>{this.matches=data.matchesArray;}
    );
  }
  
 
  deleteMatch(id) {
    this.matchService.deleteMatch(id).subscribe(
      (data)=>{
        console.log("here response from BE",data.isDeleted)
      }
    );
  }

  displayMatch(id) {
    this.router.navigate([`matchInfo/${id}`]);
  }

  goEditMatch(id){
    this.router.navigate([`editMatch/${id}`]);
  }

 

}

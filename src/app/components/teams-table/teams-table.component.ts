import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teams: any = [];
  stadiums: any = [];
  foundedStadium: any={};
  constructor(private router: Router,private teamService:TeamService) { }

  ngOnInit() {
    this.stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]");
    this.teamService.getAllTeams().subscribe(
      (data)=>{this.teams=data.teamsTab}
    )
  }

  searshStadium(id) {
    for (let i = 0; i < this.stadiums.length; i++) {
      if (this.stadiums[i].id == id) {
        this.foundedStadium = this.stadiums[i]
      }
    }
    return this.foundedStadium.name
    // return this.stadiums.find(elt) => {return element.id == x });
  }

  goEditTeam(id) {
    this.router.navigate([`editTeam/${id}`]);
  }
  goDisplayTeam(id) {
    this.router.navigate([`teamInfo/${id}`]);
  }
  team:any={}

  deleteTeam(id) {
    this.teamService.deleteTeam(id).subscribe(
      (data)=>{console.log("Here IS BE :",data.isDeleted)}
    )
  }
}
